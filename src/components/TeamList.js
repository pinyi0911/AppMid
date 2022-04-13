import React from "react";
import { FlatList } from "native-base";
import TeamDetail from "./TeamDetail";

const TeamList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <TeamDetail team={item} navigation={navigation} />;
  return (
    <FlatList
      _dark={{ bg: "#2E2015" }}
      _light={{ bg: "#f8f8f8" }}
      // horizontal={true}//其他地方需要水平排可以用
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      showsHorizontalScrollIndicator={false}
    />    
  ); 

}

export default TeamList;