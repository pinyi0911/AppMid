import React from "react";
import { StyleSheet, Text, View, Image,Pressable} from "react-native";
import { Box, HStack, VStack, useColorMode,Center} from "native-base"
const NewsDetail = props => {
  const { colorMode } = useColorMode();
   let { news } = props;
   return (
     <View style={{flexDirection: 'column'}}>
      <View style={styles.cardContainerStyle}>

          <Image
            style={styles.imageStyle}
            source={{uri: news.image}}
          />

      </View> 
 
      <View style={styles.headerContainerStyle}>
      <Text style={{

      fontSize: 15,
      fontWeight: 'bold',
      marginHorizontal:5,
      color: colorMode == "light" ? "#2E2015" : "#f8f8f8",

      }}>{news.title}</Text>

      <Text style={{

      fontSize: 12,
      fontWeight: '500',
      color: colorMode == "light" ? "#2E2015" : "#FFC764",
      width: '100%',
      marginTop:2,
      marginHorizontal:5

      }}>{news.subtitle}</Text>

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
    // width: 130,
    marginHorizontal:5,
    
  },

  // headerContentStyle: {
  //   fontSize: 12,
  //   fontWeight: '500',
  //   color: "#2E2015",
  //   width: '100%',
  //   marginTop:2,
  //   marginHorizontal:5
  // },

  imageStyle: {
    height: 108,
    width: 180,
    marginBottom:12,
    marginHorizontal:5
  },

  
});

export default NewsDetail;
