import React from "react";
import { StyleSheet, Text, View, Image,Pressable} from "react-native";

const HotAlbumDetail = props => {
   let { album,navigation } = props;
   return (
     <View style={{flexDirection: 'column'}}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
 
          <Pressable 
            onPress={() => {navigation.navigate('Detail', album)} }//第一個引數放入要跳轉頁面的name，第二個引數則是放入要傳遞的資料
          >
          <Image
            style={styles.imageStyle}
            source={{uri: album.image}}
          />
          </Pressable>

        </View>
      </View> 
 
      <View style={styles.headerContainerStyle}>

        <Text style={styles.headerTitleStyle}>{album.title}</Text>
        <Text style={styles.headerContentStyle}>{album.artist}</Text>
      </View>
      
    </View>

  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: '500',
    // marginTop:16
  },
  headerContentStyle: {
    fontSize: 11,
    fontWeight: '300',
    color: "#131313",
    width: '100%',
    marginTop:8
  },

  imageStyle: {
    height: 200,
    width: 140,
    marginHorizontal:8,
    marginBottom:16,
  },

  
});

export default HotAlbumDetail;
