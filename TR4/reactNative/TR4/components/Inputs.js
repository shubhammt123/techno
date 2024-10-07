import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Inputs = () => {
    const handleInputChange = (text)=>{
        console.log(text);
    }
  return (
    <View>
      <TextInput placeholder="Enter Name" style={{borderWidth : 2 , borderColor : "black" , padding :   10 , fontSize : 20}} onChangeText={handleInputChange}
      keyBoardType = "numeric"
      />
    </View>
  )
}

export default Inputs

const styles = StyleSheet.create({})