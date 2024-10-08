import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../components/Home';
import Cart from '../components/Cart';
import Profile from '../components/Profile';
import ProfileNavigation from './ProfileNavigation';

const UserNavigation = () => {
    const  Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Cart' component={Cart} />
        <Tab.Screen name='ProfileScreen' component={ProfileNavigation} options={{headerShown : false}} />
    </Tab.Navigator>
  )
}

export default UserNavigation

const styles = StyleSheet.create({})