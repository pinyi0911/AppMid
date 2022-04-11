import React from 'react';
import { Center, Text,useColorMode,Box } from "native-base";
import serialData from "../json/serialnum.json";
import SerialList from "../components/SerialList";

const SerialNumScreen = ({ navigation }) => {
const { colorMode } = useColorMode();
 
    return (
    <Box 
    bg={colorMode == "light" ? "#f8f8f8" : "#2E2015"} 
    flex={1}
    >

   
            <SerialList
                    list={serialData.data}
                    navigation={navigation}
            />
            
    </Box>
    );
}

export default SerialNumScreen ;