import React, { useState } from "react";
import { Image, Box, Center, ScrollView, Text, useColorMode, VStack, HStack, Actionsheet, useDisclose } from "native-base";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CookiesListScreen from "./CookiesListScreen";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { VictoryPolarAxis,VictoryChart,VictoryArea,VictoryTheme } from 'victory-native';
const CookieScreen = ({ route }) => {
    var color;
    const { name, image, fileImage_B, fileImage_D, skillImage, skillName, skillDescription1,skillDescription2,skillDescription3,CDtime, equipment1, equipment2, recommend  } = route.params;
    const { colorMode } = useColorMode();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const ifEquip =(type) => {
        switch (type) {
            case "傷害抵抗":
                return color = "#785140";
            case "冷卻":
                return color = "#9A308F";
            case "攻擊":
                return color = "#CB0203"
            default:
                break;
        }
    }
    const equipNum = (e1, e2) =>{
        if(e1 && e2){
            return(
            <Text fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"#F8F8F8"}>
                適合配料：
                <Text color={ifEquip(e1)}>{e1}</Text>、
                <Text color={ifEquip(e2)}>{e2}</Text>
            </Text>);
        }else{
            return(
            <Text fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"#F8F8F8"}>
                適合配料：
                <Text color={ifEquip(e1)}>{e1}</Text>
            </Text>);
        }
    }
    const { isOpen, onOpen, onClose } = useDisclose();  
    return(
        <ScrollView style={{flex: 1,backgroundColor:colorMode == "light" ? "#f8f8f8" : "#2E2015"}}>
            <Center mt={5}>
                {colorMode == "light" ?
                    (<Image
                        width= "315"
                        height= "165"
                        source={{uri: fileImage_B}}
                        alt="fileImage_B"
                    /> ):
                    (<Image
                        width= "315"
                        height= "165"
                        source={{uri: fileImage_D}}
                        alt="fileImage_D"
                    /> )
                }
                <Box width={315} borderRadius={6} bg={colorMode == "light" ? "white" : "#564334"}>
                    <Text color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} fontSize={15} fontWeight="bold" 
                        mt="18" ml="18" mr="3" mb="3" pl={3} borderLeftWidth={4} borderLeftColor="#FFC764">就業能力分析</Text>

                        <HStack ml={34} mb={30} alignItems="center">
                        <Pressable
                        onPress={onOpen}
                        >
                            <Image
                            width="83"
                            height="83"
                            source={{uri: skillImage}}
                            alt="skillImage"
                            />
                        </Pressable>
                        
                        <Actionsheet isOpen={isOpen} onClose={onClose}>
                            
                            <VStack h="50%" w="100%" borderTopRadius={20}bg={colorMode == "light" ? 'rgba(255,199,100,0.95)':'rgba(96,74,57,0.95)'  }>
                            <Pressable onPress={onClose} position="absolute" top={15} right={15}>
                            <MaterialCommunityIcons name="close-circle-outline" color={colorMode == "light" ? "#2E2015" : "#FFC764"} size={24} />
                            </Pressable>    
                            <Center pl="35px"pr="35px">   
                            <Box mt="50px">
                            <HStack mb="20px" justifyContent="space-between">
                                <Text fontSize={17} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"#F8F8F8"}>{skillName}</Text>
                                <Text textAlign="right"fontSize={17} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"#F8F8F8"}>{CDtime}秒</Text>
                            </HStack>  
                            <Text alignSelf="flex-start"fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} mb="30px">{skillDescription1}</Text>
                            <Text alignSelf="flex-start"fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#8C6140" : "#FFC764"} >{skillDescription2}</Text>
                            <Text alignSelf="flex-start"fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#8C6140" : "#FFC764"} mb="30px">{skillDescription3}</Text>
                            </Box>
                            </Center>
                            </VStack>

                                      
                        </Actionsheet>
                              
                            <VStack ml={17}>
                                <Text fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"#F8F8F8"}>{skillName}</Text>
                                <Text fontSize={15} fontWeight="bold" color="#CAC6C4">CD {CDtime}秒</Text>
                            </VStack>
                        </HStack>

                    <Center width={280} pt={30} pb={30} mb={30} borderBottomWidth={1}  borderTopWidth={1} borderColor="#CAC6C4" alignSelf="center">
                                    {/* <Text fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"F8F8F8"}>
                                        適合配料：
                                        <Text color={ifEquip(equipment1)}>{equipment1}</Text>
                                        <Text color={ifEquip(equipment2)}>{equipment2}</Text>
                                    </Text> */}
                                {equipNum(equipment1, equipment2)}
                                
                            
                    </Center>
                    <Center >
                    
                    <VictoryChart polar 
                        theme={VictoryTheme.material}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                          }}
                        width={250}
                        height={250}
                    >
                        <VictoryArea 
                        style={{
                            data: {
                               fill:"#FFC764",
                               
                            },
                            
                            
                         }}
                        data={[
                        {x:"公會",y:50,},
                        {x:"蘇打群島",y:25},
                        {x:"競技場",y:50},
                        {x:"守護之戰",y:50},
                        {x:"推圖",y:30}
                        
                        ]}
                        width={250}
                        height={250}
                        
                        />
                        <VictoryPolarAxis
                        labelPlacement="vertical"
                        width={250}
                        height={250}
                        />
                    </VictoryChart>
                    
                    </Center>
                    <Box height={38} borderBottomRadius={6} bgColor="#FFC764"></Box>
                    
                </Box>
            </Center>
        </ScrollView>
    );
}

export default CookieScreen;