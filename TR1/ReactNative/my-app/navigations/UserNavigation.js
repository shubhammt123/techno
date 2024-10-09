import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../components/Home';
import Cart from '../components/Cart';
import Profile from '../components/Profile';
import ProfileNavigation from './ProfileNavigation';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useSelector } from 'react-redux';

const UserNavigation = () => {
  const Tab = createBottomTabNavigator();
  const { cartItem } = useSelector((state)=>state.cart)
  console.log(cartItem , "Cart ITem------------")
  return (
    <View style={{flex : 1}}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon : ()=><FontAwesome name="home" size={24} color="black" />}} />
        <Tab.Screen name="Cart" component={Cart} options={{tabBarIcon : ()=><Feather name="shopping-cart" size={24} color="black"  /> , tabBarBadge : cartItem.length}} />
        <Tab.Screen name="ProfileScreen" component={ProfileNavigation} options={{headerShown : false , tabBarIcon : ()=><Fontisto name="person" size={24} color="black" /> }} />
      </Tab.Navigator>
    </View>
  )
}

export default UserNavigation

const styles = StyleSheet.create({})