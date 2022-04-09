import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking,TouchableOpacity } from 'react-native';

const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    star,
    light_star,
    dark_star,
    image,
    descriptions
  } = route.params;
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
  
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
        <Text style={styles.titleStyle} >{title}</Text>
        <Text style={styles.artistStyle} >{artist}</Text>

      <View style={styles.starContainerStyle}>

        
      </View>

      <Text 
        style={{
          lineHeight: 24,
          marginBottom:28,
          textAlign:'center',
        }}
        >{descriptions}</Text>

     
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>BUY NOW FOR $46.99</Text>
        </TouchableOpacity>
     

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  imageStyle: {
    height: 300,
    width: 210,
    marginHorizontal: 75,
 
  },
  cardContainerStyle: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    // marginTop: 5
  },
  titleStyle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:28,

  },
  artistStyle: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 14,
    color: '#666666',
    marginTop:5,
  },
  button: {
    marginHorizontal: 70,
    backgroundColor: '#6200EE',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:50,
    
  },
  buttonText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    marginVertical: 10,
    // marginHorizontal:0,
  },
  starContainerStyle: {
    flexDirection: "row",
    alignItems:'center',
    justifyContent: 'center',
    marginTop:8,

  }

});

export default DetailScreen;
