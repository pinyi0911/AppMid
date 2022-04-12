import React from "react";
import { Center, Text ,Box,Image,Pressable,useColorMode,HStack,ScrollView} from "native-base";


const Team = ({navigation}) => {
    const { colorMode } = useColorMode(); 
    return(
    
    <Box>
    
    <Text fontSize="17" fontWeight='bold' color={colorMode == "light" ? "#2E2015" : "#f8f8f8" } paddingLeft= "5" mt="25"mb="4">
        隊伍推薦
    </Text>
    <Center>
    <ScrollView horizontal={true}>

    <Pressable
    onPress={() => {navigation.navigate('SerialNum')} }
    >
    <Image
    source={{uri:"https://github.com/pinyi0911/AppMid/blob/master/img/Component%2011.png?raw=true"}}
    alt="最新餅乾"
    height="184"
    width= "120"
    marginBottom="40"
    
    ml="5"
    />
    </Pressable>
    <Pressable
    onPress={() => {navigation.navigate('SerialNum')} }
    >
    <Image
    source={{uri:"https://github.com/pinyi0911/AppMid/blob/master/img/Component%209.png?raw=true"}}
    alt="王國競技場"
    height="184"
    width= "120"
    marginBottom="40"
    
    ml="5"
    />
    </Pressable>
    <Pressable
    onPress={() => {navigation.navigate('SerialNum')} }
    >
    <Image
    source={{uri:"https://github.com/pinyi0911/AppMid/blob/master/img/Component%208.png?raw=true"}}
    alt="公會"
    height="184"
    width= "120"
    marginBottom="40"
    
    ml="5"
    />
    </Pressable>
    <Pressable
    onPress={() => {navigation.navigate('SerialNum')} }
    >
    <Image
    source={{uri:"https://github.com/pinyi0911/AppMid/blob/master/img/Component%2010.png?raw=true"}}
    alt="守護"
    height="184"
    width= "120"
    marginBottom="40"
    mr="5"
    ml="5"
    />
    </Pressable>
    </ScrollView>
    </Center>

    

</Box>
);
}



export default Team;