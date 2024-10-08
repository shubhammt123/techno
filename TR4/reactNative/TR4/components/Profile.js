import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({ navigation }) => {
  return (
    <View>
      <Button title="Open Camera" onPress={()=>{navigation.navigate("Camera")}} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})