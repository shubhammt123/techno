import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = ({children , style}) => {
  return (
    <View>
      <Text style={[style , {textAlign : "center" , fontSize : 30 , fontWeight : 700 , padding : 20 , color : "white" , borderWidth : 3 , borderColor : "black"}]}>{children}</Text>
    </View>
  )
}

export default Box

const styles = StyleSheet.create({})