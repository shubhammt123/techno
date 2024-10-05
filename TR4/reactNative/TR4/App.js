import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Vector from "./assets/splash.png"
import { useState } from "react";

export default function App() {
  const [open , setOpen] = useState(false)
  return (
    <View style={[styles.box ,  styles.container , { backgroundColor : "red"}]}>
      <ScrollView>
      <Text>Hello Techno</Text>
      <Image source={{uri : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}} style={{width : 400 , height : 400}} />
      {/* <ImageBackground source={{uri : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}} style={{width : 500 , height : 500}}>
      <Text>Hello Techno</Text>
      </ImageBackground> */}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box : {
    backgroundColor : "pink",
    flex : 1,
    padding : 50
  }
});
