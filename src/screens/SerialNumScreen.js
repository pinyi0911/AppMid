import React from 'react';
import { Center, Text,useColorMode } from "native-base";

const SerialNumScreen = () => {
const { colorMode } = useColorMode();
 
    return (
    <Center bg={colorMode == "light" ? "#f8f8f8" : "#2E2015"} flex={1}>
        <Text color="#fff" fontSize={30}>
            序號兌換
        </Text>              
    </Center>
    );
}

export default SerialNumScreen ;