import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = ( { navigation } ) => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
        <Text style={{fontSize : 30 , color : "blue"}}>Signup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})