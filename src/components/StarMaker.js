import React from "react";
import {StyleSheet,View,Image} from "react-native";
const StarMaker = (props) => {

  if (props.star == 1) {
    return (

      <View style={styles.starContainerStyle}>
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.dark_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.dark_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.dark_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.dark_star}}
          />
      </View>

    );
  } else if (props.star == 2) {
    return (

      <View style={styles.starContainerStyle}>
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.dark_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.dark_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.dark_star}}
          />
      </View>
    );
  } else if (props.star == 3) {
    return (

      <View style={styles.starContainerStyle}>
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.dark_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.dark_star}}
          />
      </View>

    );
  } else if (props.star == 4) {
    return (
      <View style={styles.starContainerStyle}>
        
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.dark_star}}
          />
      </View>
    );
  } else if (props.star == 5) {
    return (
      <View style={styles.starContainerStyle}>
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
          <Image
            style={styles.starStyle}
            source={{uri: props.light_star}}
          />
      </View>
    );
    
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
 starContainerStyle: {
   flexDirection: "row",
   marginBottom:8
 },
 starStyle: {
   height: 14,
   width: 14,
   marginLeft:6,
   
 }
});

export default StarMaker;