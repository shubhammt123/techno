import 'react-native-gesture-handler';
import { ActivityIndicator, Alert, Button, Dimensions, Image, ImageBackground, Modal, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Vector from "./assets/splash.png"
import { useState } from "react";
import Box from './components/Box';
import List from './components/List';
import Inputs from './components/Inputs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppNavigation from './navigations/AppNavigation';



export default function App() {

  const [open , setOpen] = useState(false)
  const { width , height } = useWindowDimensions();
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <View style={[   styles.container ]}>
      <NavigationContainer>
        <AppNavigation  />
        {/* <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator> */}
        {/* <Drawer.Navigator>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='Login' component={Login} />
          <Drawer.Screen name='Signup' component={Signup} />
        </Drawer.Navigator> */}
        {/* <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Login' component={Login} />
          <Tab.Screen name='Signup' component={Signup} />
        </Tab.Navigator> */}
      </NavigationContainer>
      {/* <List /> */}
      {/* <Inputs /> */}
      {/* <View style={[styles.box , {width : width > 600 ? 800 : 300   , 
    height : height > 600 ? 400 : 400  ,}]}>
        <Text style={styles.boxText}>Hello Techno</Text>
      </View> */}
      {/* <Box style={{backgroundColor : "red"}}>Box-1</Box>
      <Box style={{backgroundColor : "skyblue"}}>Box-2</Box>
      <Box style={{backgroundColor : "orange"}}>Box-3</Box>
      <Box style={{backgroundColor : "green"}}>Box-4</Box>
      <Box style={{backgroundColor : "blue"}}>Box-5</Box>
      <Box style={{backgroundColor : "yellow"}}>Box-6</Box> */}
      {/* <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
      <ActivityIndicator size="large" color="midnightblue" animating={true} /> */}
      {/* <Button title="Show Alert" color="midnightblue" onPress={()=>{Alert.alert("Invalid Data","Subheading",[
        {
          text : "cancel",
          onPress : ()=>{console.log("Cancel Clicked")}
        },
        {
          text : "Ok",
          onPress : ()=>{console.log("ok Clicked")}
        },
      ])}}/> */}
      {/* <ScrollView>
      <Text>Hello Techno</Text>
      <Image source={{uri : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}} style={{width : 400 , height : 400}} />

      <ImageBackground source={{uri : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}} style={{width : 500 , height : 500}}>
      <Text>Hello Techno</Text>
      </ImageBackground>
      <Button title="Click Me" color="midnightblue" onPress={()=>{console.log("Button Clicked")}}/>
        <Pressable onPress={()=>{console.log("Pressable Component")}} style={{backgroundColor : "green" , padding : 20   }}>
          <Text style={{fontSize : 30 , color : "white" , textAlign : "center"}}>
            Pressable Component
          </Text>
        </Pressable>
        <Button title="Open Modal" onPress={()=>{setOpen(true)}} />
        <Modal visible={open} animationType="slide" presentationStyle="pagesheet" >
          <View style={{padding : 50}}>
          <Button title="Close Modal" onPress={()=>{setOpen(false)}}  />
          </View>
          
        </Modal>
        <View style={{backgroundColor : "pink" , width : 300 , height : 300 , borderWidth : 4 , borderColor : "black" , borderRadius : 20 , padding : 20 }}>
          <Text style={{backgroundColor : "green" , color : "white" , padding : 20 , fontSize : 30   , borderWidth : 3 , borderColor : "white" , borderRadius : 10}}>Box</Text>
        </View>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'lightgreen',

    
    
  },
  box : {backgroundColor : "skyblue" , 
     justifyContent : "center" ,    alignItems : "center"},
  boxText :  {
    fontSize : 40,
    fontWeight : "bold",
    color : Platform.OS === "android" ? "blue" : "red"
  }
});
