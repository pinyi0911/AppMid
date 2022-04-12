import React from "react";
import { FlatList } from "native-base";
import CookiesDetail from "./CookiesDetail";

const CookiesList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <CookiesDetail cookies={item} navigation={navigation} />;
  return (
    <FlatList
    _dark={{ bg: "#2E2015" }}
    _light={{ bg: "#f8f8f8" }}
    horizontal={true}//其他地方需要水平排可以用
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  ); 

}

export default CookiesList;