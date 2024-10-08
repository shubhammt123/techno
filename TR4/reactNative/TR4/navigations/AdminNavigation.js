import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../components/Home';
import Admin from '../components/Admin';
import Profile from '../components/Profile';
import ProfileNavigation from './ProfileNavigation';

const AdminNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Admin" component={Admin} />
        <Tab.Screen name="ProfileScreen" component={ProfileNavigation} options={{headerShown : false}} />
    </Tab.Navigator>
  )
}

export default AdminNavigation

const styles = StyleSheet.create({})