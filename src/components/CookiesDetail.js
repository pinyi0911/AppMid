import React from "react";
import { Box, VStack, Text, Image, useColorMode, Center, Pressable} from "native-base"
// import Navigation from "../navigation";

const CookiesDetail = ({ cookies, navigation }) => {
const { colorMode } = useColorMode();
  return (
    <Box>
        <VStack 
            mt="5"
            ml="18"
            mr="18"
        >
          <Pressable
            onPress={() => navigation.navigate("CookiePage", cookies)}
          >
            <Image 
            width= "78"
            height= "78"
            source={{uri: cookies.image}}
            alt="cookie"
            borderRadius={7}
        />
          </Pressable>
        
        <Text
          color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} 
          textAlign="center" fontWeight="bold" mt="1.5" mb="1.5">{cookies.name}</Text>
        </VStack>
      
    </Box>
  )};

export default CookiesDetail;