
import { Button, Image, ImageBackground, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Vector  from "./assets/splash.png"
import { useState } from "react";

export default function App() {
  const [open , setOpen] = useState(false);
  return (
    <View style={[styles.container ]}>
      <StatusBar backgroundColor="lightgreen" />
      {/* <ImageBackground source={Vector} >
      <Text style={{fontSize : 30 , color : "white"}}>Hello Techno</Text>
      <Image source={Vector} style={{width : 200 , height : 200}} />
      <Image source={{uri : "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg"}} style={{width : 200 , height : 200}} />
      

      </ImageBackground> */}

      <View style={styles.box}>
        <Text style={{fontSize : 20 , padding : 40 , backgroundColor : "pink" , borderWidth : 2 , borderColor :  "black" , borderRadius : 20}}>Hello  Techno</Text>
        <Button title="Open Modal" onPress={()=>{setOpen(true)}} />
        <Modal visible={open} animationType="slide" presentationStyle="pagesheet">
          <Button title="Close Modal" onPress={()=>{setOpen(false)}} />
        </Modal>
                {/* <ScrollView>
          
        
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
        </ScrollView> */}
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
