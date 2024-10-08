import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from "react";
import AuthNavigation from './AuthNavigation';
import AdminNavigation from './AdminNavigation';
import UserNavigation from './UserNavigation';

const AppNavigation = () => {
  const [auth , setAuth] = useState(true)
  const [role , setRole] = useState("User");
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