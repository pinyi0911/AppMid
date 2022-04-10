import React from "react";
import { View,ScrollView } from "react-native";
import NewsList from "../components/NewsList";
import newsData from "../json/news.json";
import TeamList from "../components/TeamList";
import teamData from "../json/btn_team.json";
import SerialNum from "../components/SerialNum";
import { useColorMode } from 'native-base';
const MainScreen = ({ navigation }) => {
  const { colorMode } = useColorMode();  
  return (
    <ScrollView style={{flex: 1,backgroundColor:colorMode == "light" ? "#f8f8f8" : "#2E2015"}}>
      <SerialNum navigation={navigation}/>
      <NewsList 
        navigation={navigation}
      />
      <TeamList
      navigation={navigation}
      />

    </ScrollView>
  );
};

export default MainScreen;
