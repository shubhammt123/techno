import { useState, useEffect } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice';

export default function Home() {
  const {  products } = useSelector((state)=>state.product);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllProduct());
  },[]);

  const handleAddCart = (data)=>{
    dispatch(addToCart(data));
  }

  return (
    <View>
      <FlatList
      data={products}
      renderItem={(item)=>{
        return (
            <View style={{backgroundColor : "white" , marginVertical : 10 , marginHorizontal : 5 , padding : 10   , width :  300}}>
                
                <Image source={{uri : item.item.image}} style={{width : 250 , height : 300}} />
                <Text>{item.item.title}</Text>
                <Button title='Add to cart' onPress={()=>{handleAddCart(item.item)}} />
            </View>
        )
      }}
      keyExtractor ={item=>item.id}
      numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
