import React from "react";
import { FlatList } from "native-base";
import SerialDetail from "./SerialDetail";

const SerialList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <SerialDetail serial={item} navigation={navigation} />;
  return (
    <FlatList
    _dark={{ bg: "#2E2015" }}
    _light={{ bg: "#f8f8f8" }}
    //   horizontal={true}//其他地方需要水平排可以用
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default SerialList;