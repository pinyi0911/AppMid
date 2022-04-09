import React from "react";
import {StyleSheet,View,Image,Text} from "react-native";
import item from "../json/album_section.json";

const Score = (props) => {
    if (props.star !== null) {
        return (
    
        <Text style={styles.ScoreStyle}>
            {props.star}.0 
            <Text style={{ color: "#666666" }}>/ 5.0</Text>
        </Text>
    
        );
      }
      else{
        return(null);
      }

  };


const styles = StyleSheet.create({
    ScoreStyle: {
    flexDirection: "row",
    marginLeft:8,
    marginBottom:8
   
 },

});

export default Score;