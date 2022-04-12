import React,{useState} from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,useColorMode,Center} from "native-base"

const SerialDetail = ({ serial, navigation }) => {
const { colorMode } = useColorMode();
const [change, setChange] = useState(true);
  const changeIcon = () => {
      setChange(!change);
  };
  return (
    <Center>
    <Box>
        <HStack
        alignItems="center"
        >
        <VStack 
        borderLeftWidth= "7"
        mt="5"
        // ml="1"
        borderLeftColor="#FFC764"
        
        >
          <Text
          color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} 
          ml="3" fontWeight="700" w="226">{serial.name}</Text>
          <Text
          color={colorMode == "light" ? "#2E2015" : "#f8f8f8"}
          ml="3">{serial.gift}</Text>
          <Text
          color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} 
          ml="3">{serial.time}</Text>
        </VStack>

         <Pressable mt="5"

          onPress={() => changeIcon()}>
              
              {change ? 
            <Image height="50" width="92"
            source={{uri:"https://github.com/pinyi0911/AppMid/blob/master/img/Property%201=Variant2.png?raw=true"}}
            alt="未兌換"
            h="50"
            w="92"
            />
              :<Image height="50" width="92"
              source={{uri:"https://github.com/pinyi0911/AppMid/blob/master/img/Property%201=Default%20(1).png?raw=true"}}
              alt="已兌換"
              h="50"
              w="92"
              />
              }
         </Pressable>
        </HStack>
        
      
    </Box>
    </Center>
  )};

export default SerialDetail;