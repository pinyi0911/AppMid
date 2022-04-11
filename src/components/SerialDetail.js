import React,{useState} from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,useColorMode} from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SerialDetail = ({ serial, navigation }) => {
const { colorMode } = useColorMode();
const [change, setChange] = useState(true);
  const changeIcon = () => {
      setChange(!change);
  };
  return (
    <Box>
        <VStack 
        borderLeftWidth= "7"
        mt="5"
        ml="5"
        borderLeftColor="#FFC764"
        >
          <Text
          color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} 
          ml="3" fontWeight="700">{serial.name}</Text>
          <Text
          color={colorMode == "light" ? "#2E2015" : "#f8f8f8"}
          ml="3">{serial.gift}</Text>
          <Text
          color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} 
          ml="3">{serial.time}</Text>
        </VStack>

         <Pressable onPress={() => changeIcon()}>
              
              {change ? 
              <Text width="50"height="30" 
              bg="#000"
              color="#FFC764"
              >
              ttt</Text>
                       :<MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={24} />
              }
              </Pressable>
      
    </Box>
  )};

export default SerialDetail;