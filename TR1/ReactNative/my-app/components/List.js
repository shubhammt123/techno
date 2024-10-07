import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useState ,  useEffect } from "react";

const data = [
    {id : 1 , title : "Iphone"},
    {id : 2 , title : "Iphone 1"},
    {id : 3 , title : "Iphone 2"},
    {id : 4 , title : "Iphone 3"},
]

const List = () => {
    const [data , setData] = useState([]);
    const fetchData = async ()=>{
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }
useEffect(()=>{
    fetchData()
},[]);
  return (
    <View>
      <FlatList
      data={data}
      renderItem={(item)=>{
        console.log(item)
        return (
            <View style={{backgroundColor : "white" , marginVertical : 10 , marginHorizontal : 5 , padding : 10   , width :  200}}>
                <Text style={{fontSize : 30}}>{item.item.userId}</Text>
                <Text>{item.item.title}</Text>
            </View>
        )
      }}
      keyExtractor ={item=>item.id}
      numColumns={2}
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({})