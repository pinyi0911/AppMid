import React from 'react';
import { Linking } from 'react-native';
import { Center, Text,useColorMode,Box,Pressable} from "native-base";
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

            <Center flex="1" mb="250">
                <Pressable
                    onPress={() => Linking.openURL('https://game.devplay.com/coupon/ck/zh-Hant')}
                >
                <Text 
                    bg="#FFC764"w="330"h="50"
                    textAlign="center"
                    pt="3.5"
                    borderRadius="6"
                    borderWidth="1"
                    borderColor="#2E2015"
                    fontSize="15"
                    fontWeight="700"
                    color="#2E2015"
                >前 往 兌 換</Text>
                </Pressable>
            </Center>
        </Box>
    );
}

export default SerialNumScreen ;