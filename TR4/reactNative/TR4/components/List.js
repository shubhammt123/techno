import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState , useEffect } from "react";



const List = () => {
    const [data , setData] = useState();
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
        fetchData();
    },[])
  return (

    <View>
        
      {/* {data?.map((item)=>{
        console.log(item.id)
        return (
            <View key={item.id} style={{backgroundColor : "yellow" , margin : 10  , padding  : 20}}>
                <Text style={{fontSize : 30}}>{item.title}</Text>
            </View>
        )
      })} */}
      <FlatList
      data={data}
      renderItem = {(item)=>{
        return (
            <View style={{backgroundColor : "white" , padding : 20 , margin : 20}}key={item.item.id}>
                <Text style={{fontSize : 50}}>{item.item.title}</Text>
            </View>
        )
      }}
      ListEmptyComponent={<Text>No Item Found</Text>}
      />
    
    </View>
  )
}

export default List

const styles = StyleSheet.create({})