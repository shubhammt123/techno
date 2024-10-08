import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from "react";
import AuthNavigation from './AuthNavigation';
import AdminNavigation from './AdminNavigation';
import UserNavigation from './UserNavigation';

const AppNavigation = () => {
    const [isAuth , setIsAuth] = useState(true);
    const [role , setRole] = useState("Admin");
  return (
    <View style={{flex :1}}>
      {
        !isAuth ? 
        <AuthNavigation />
        : role === "Admin" ?
        <AdminNavigation /> 
        : <UserNavigation />
      }
    </View>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})