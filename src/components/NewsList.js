import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import NewsDetail from "./NewsDetail";
import news from "../json/news.json";


const NewsList = ({ list,navigation }) => {

  const renderItem = ({ item }) => <NewsDetail news={item} navigation={navigation} />;
  return (

    <FlatList
    _dark={{ bg: "#2E2015" }}
    _light={{ bg: "#f8f8f8" }}
     horizontal={true}//其他地方需要水平排可以用
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    /> 
       
  );  
};

const styles = StyleSheet.create({
  sectionHeader: {
    
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 45,
    paddingBottom: 5,
    paddingLeft: 10,
    color:"#2E2015",
    
  },
})

export default NewsList;



