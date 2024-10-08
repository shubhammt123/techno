import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../components/Profile';
import Camera from '../components/Camera';

const ProfileNavigation = () => {
    const  Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Camera" component={Camera}/>
    </Stack.Navigator>
  )
}

export default ProfileNavigation

const styles = StyleSheet.create({})