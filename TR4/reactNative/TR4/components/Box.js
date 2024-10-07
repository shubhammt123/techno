import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = ({children , style}) => {
  return (
    <View style={[style , {}]}>
      <Text style={{fontSize : 40 ,  textAlign : "center" , borderWidth : 2 , borderColor : "black"}}>{children}</Text>
    </View>
  )
}

export default Box

const styles = StyleSheet.create({})