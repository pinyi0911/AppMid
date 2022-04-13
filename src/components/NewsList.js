import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import NewsDetail from "./NewsDetail";

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

export default NewsList;



