import React from "react";
import { View } from "react-native";
import AlbumList from "../components/AlbumList";
import albumData from "../json/album_section.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1,backgroundColor:'#fff'}}>
      <AlbumList 
        list={albumData.albumList}
        navigation={navigation}
      />
    </View>
  );
};

export default AlbumScreen;
