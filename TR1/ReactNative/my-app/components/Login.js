import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
        <Text style={{color : "blue", fontSize : 30 , textDecorationLine : "underline"}}>SignUp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})