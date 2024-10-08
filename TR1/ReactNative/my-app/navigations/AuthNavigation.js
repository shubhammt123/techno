import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Login from '../components/Login';
import Singup from '../components/Singup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const LoginStack = ()=>{
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Singup} />
    </Stack.Navigator>
  )
}

const AuthNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{flex : 1}}>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Cart' component={Cart} />
        <Tab.Screen name='LoginScreen' component={LoginStack} options={{headerShown : false}} />
      </Tab.Navigator>
    </View>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})