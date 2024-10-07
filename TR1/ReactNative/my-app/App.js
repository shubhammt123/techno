
import { ActivityIndicator, Alert, Button, Dimensions, Image, ImageBackground, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Vector  from "./assets/splash.png"
import { useState } from "react";
import Box from './components/Box';
import { Platform } from 'react-native';
import List from './components/List';
import Inputs from './components/Inputs';



export default function App() {
  
  const [open , setOpen] = useState(false);
  const windowWidth = useWindowDimensions();
  const windowHeight = useWindowDimensions();
  return (
    <View style={[styles.container ]}>
      {/* <List /> */}
      <Inputs />
      {/* <View style={[styles.card,{width : windowWidth > 600 ? 600 : 400 , 
    height : windowHeight > 600 ? 600 : 400,}]}>
        <Text style={[styles.cardText , styles.text]}>Hello Techno</Text>
      </View> */}
      {/* <Box style={{backgroundColor : "brown" ,   top: 75 , left : 75}}>Box-1</Box>
      <Box style={{backgroundColor : "plum" }}>Box-2</Box>
      <Box style={{backgroundColor : "green" , position : "absolute" , top : 100  , left : 100}}>Box-3</Box>
      <Box style={{backgroundColor : "blue"}}>Box-4</Box>
      <Box style={{backgroundColor : "lightgreen"}}>Box-5</Box>
      <Box style={{backgroundColor : "skyblue"}}>Box-6</Box> */}
      {/* <StatusBar backgroundColor="lightgreen"  barStyle="dark-content" />
      <ActivityIndicator size="large" color="midnightblue" animating={true} />
      <Button title="Show Alert" color="midnightblue" onPress={()=>Alert.alert("Invalid Data","Dob Incorrect",[
        {
          text : "cancel",
          onPress : ()=>{console.log("Cancel Clicked")}
        },
        {
          text : "ok",
          onPress : ()=>{console.log("Ok Clicked")}
        },
      ])} /> */}
      {/* <ImageBackground source={Vector} >
      <Text style={{fontSize : 30 , color : "white"}}>Hello Techno</Text>
      <Image source={Vector} style={{width : 200 , height : 200}} />
      <Image source={{uri : "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg"}} style={{width : 200 , height : 200}} />
      

      </ImageBackground> */}

      {/* <View style={styles.box}>
        <Text style={{fontSize : 20 , padding : 40 , backgroundColor : "pink" , borderWidth : 2 , borderColor :  "black" , borderRadius : 20}}>Hello  Techno</Text>
        <Button title="Open Modal" onPress={()=>{setOpen(true)}} />
        <Modal visible={open} animationType="slide" presentationStyle="pagesheet">
          <Button title="Close Modal" onPress={()=>{setOpen(false)}} />
        </Modal>
                <ScrollView>
          
        
        <Button title="Press" color="midnightblue" onPress={()=>{console.log("Button Pressed")}}  />
          <Pressable onLongPress={()=>{console.log("On Long Press Event fired")}}>
          <Image source={{uri : "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg"}} style={{width : 400 , height : 400}} />
          </Pressable>
        <Text style={{color : "white"}}>
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
        </Text>
        <Image source={{uri : "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg"}} style={{width : 400 , height : 400}} />
        <Text style={{color : "white"}}>
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
          hello this is techno njr
        </Text>
        </ScrollView>
      </View> */}
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    borderWidth : 4,
    borderColor : "red",
    flex : 1,
    justifyContent : "center",
    // flexDirection : "column-reverse",
    alignItems : "center"
    
  },
  card : {
    backgroundColor : "lightgreen" ,
    justifyContent : "center",
    alignItems : "center"
  },
  text : {
    ...Platform.select({
      ios : {
        color : "red"
      },
      android : {
        color : "blue"
      }
    })
  },
  cardText  : {
    fontSize :  40,
    // fontWeight : 700
    fontWeight : "bold"
  },
  box : {
    color : "black",
    backgroundColor : "yellow",
    width : 200,
    height : 200,
    borderWidth : 2,
    borderColor : "black",
    borderStyle : "solid",
    borderRadius : 10,
    padding : 20
  }
});
