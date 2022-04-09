import React from "react";
import { View } from "react-native";
import AlbumList from "../components/AlbumList";
import albumData from "../json/album_section.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1,backgroundColor:'#f8f8f8'}}>
      <AlbumList 
        list={albumData.albumList}
        navigation={navigation}
      />
    </View>
  );
};

export default AlbumScreen;
