import React from "react";
import { Box, HStack, Text, Image, useColorMode, Center, VStack} from "native-base"

const TeamDetail = ({ team }) => {
const { colorMode } = useColorMode();
  return (
    <Center>
        <HStack mt={2.5} mb={2.5}>
          <VStack width={85}  alignItems="center">
            <Image 
            width= "55"
            height= "55"
            source={{uri: team.image}}
            alt="cookies_name"
            />
           <Text
             color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} 
             textAlign="center" fontWeight="bold">{team.name}
           </Text>
          </VStack>

          <HStack width= "250" alignItems="center" justifyContent="center" 
          backgroundColor={colorMode == "light" ? "#FED182" : "#D5A654"} borderRadius={6}>
            <Image 
              width= "117"
              height= "30"
              mr={3}
              source={{uri: team.equip}}
              alt="cookies_equip"
            />
            <Center height={45} borderLeftWidth={1}>
              <Text
                width={85}
                color= "#2E2015" ml={3}
                textAlign="left" fontWeight="bold">{team.description}
              </Text>
            </Center>
          </HStack>
        </HStack>
      
    </Center>
  )};

export default TeamDetail;