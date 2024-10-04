import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Vector  from "./assets/splash.png"

export default function App() {
  return (
    <View style={{backgroundColor : "black" , flex : 1 , justifyContent : "center" , alignItems : "center" , padding : 60}}>
      {/* <ImageBackground source={Vector} >
      <Text style={{fontSize : 30 , color : "white"}}>Hello Techno</Text>
      <Image source={Vector} style={{width : 200 , height : 200}} />
      <Image source={{uri : "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg"}} style={{width : 200 , height : 200}} />
      

      </ImageBackground> */}

      <View>
        <ScrollView>
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
});
