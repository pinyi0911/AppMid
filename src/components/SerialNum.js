import React from "react";
import { Center, Text ,Box,Image,Pressable,useColorMode} from "native-base";


const SerialNum = ({navigation}) => {
    const { colorMode } = useColorMode(); 
    return(
    <Box>

    <Text fontSize="17" fontWeight='bold' color={colorMode == "light" ? "#2E2015" : "#f8f8f8" } paddingLeft= "5" mt="25">
        序號兌換
    </Text>
    <Center>
    <Pressable
    onPress={() => {navigation.navigate('SerialNum')} }
    >
    <Image
    source={{uri:"https://github.com/pinyi0911/AppMid/blob/master/img/btn_%E5%BA%8F%E8%99%9F%E5%85%8C%E6%8F%9B.png?raw=true"}}
    alt="序號兌換"
    h="92"
    w="306"
    
    />
    </Pressable>
    </Center>
    

</Box>
);
}



export default SerialNum;