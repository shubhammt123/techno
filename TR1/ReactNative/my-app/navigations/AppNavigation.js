import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from "react";
import AuthNavigation from './AuthNavigation';
import AdminNavigation from './AdminNavigation';
import UserNavigation from './UserNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loadCartFromAsyncStorage } from '../redux/slices/cartSlice';

const AppNavigation = () => {
  const [auth , setAuth] = useState(true)
  const [role , setRole] = useState("User");
  const dispatch = useDispatch()
  useEffect(()=>{
    const loadCart = async ()=>{
      try {
        const cartData = await AsyncStorage.getItem("cart");
        const items = cartData ? JSON.parse(cartData) : []
        dispatch(loadCartFromAsyncStorage(items));
      } catch (error) {
        console.log(error)
      }
    }
    loadCart();
  },[dispatch])
  return (
    <View style={{flex : 1}}>
      {!auth ? 
      <AuthNavigation />
      : role === "Admin" ? 
      <AdminNavigation /> 
      :
      <UserNavigation />
      }
    </View>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})