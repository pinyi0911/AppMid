import React from "react";
import { View,ScrollView } from "react-native";
import NewsList from "../components/NewsList";
import newsData from "../json/news.json";
import SerialNum from "../components/SerialNum";
import Team from "../components/Team";
import { useColorMode,Text } from 'native-base';

const MainScreen = ({ navigation }) => {
  const { colorMode } = useColorMode();  
  return (
    <ScrollView style={{flex: 1,backgroundColor:colorMode == "light" ? "#f8f8f8" : "#2E2015"}}>
      <SerialNum navigation={navigation}/>
      <Text 
        fontWeight= 'bold'
        fontSize= "17"
        paddingTop= "30"
        paddingBottom= "1"
        paddingLeft= "5"
        color={colorMode == "light" ? "#2E2015" : "#f8f8f8"}
      >{newsData.title}</Text>

      <NewsList 
        list={newsData.data}
        navigation={navigation}
      />

      <Team navigation={navigation}/>

    </ScrollView>
  );
};

export default MainScreen;