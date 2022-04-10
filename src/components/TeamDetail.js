import React from "react";
import { StyleSheet, Text, View, Image,Pressable} from "react-native";

const TeamDetail = props => {
 
   let { team,navigation } = props;
   return (
     <View style={{flexDirection: 'column'}}>
      <View style={styles.cardContainerStyle}>
        
 
          <Pressable 
            onPress={() => {navigation.navigate('Detail', team)} }//第一個引數放入要跳轉頁面的name，第二個引數則是放入要傳遞的資料
          >
          <Image
            style={styles.imageStyle}
            source={{uri: team.image}}
          />
        
          </Pressable>

        
      </View> 
 
    </View>

  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
 
  imageStyle: {
    height: 184,
    width: 120,
    marginBottom:40,
    marginHorizontal:5
  },

  
});

export default TeamDetail;