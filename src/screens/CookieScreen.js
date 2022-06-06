import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, Box, Center, ScrollView, Text, useColorMode, VStack, HStack, Pressable, Actionsheet, useDisclose,} from "native-base";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CookiesListScreen from "./CookiesListScreen";
import { VictoryPolarAxis,VictoryChart,VictoryArea,VictoryTheme } from 'victory-native';
import { useSelector, useDispatch } from "react-redux";
import { likeActions } from "../../redux/likeSlice";

const CookieScreen = ({ route }) => {

    const dispatch = useDispatch();
    const addToLike = () => {
        dispatch(likeActions.addToLike({...route.params}));
    }
    const removeFromLike = () => {
        dispatch(likeActions.removeFromLike({...route.params}));
    }
    var color;
    const { name, image, fileImage_B, fileImage_D, 
        skillImage, skillName, skillDescription1, skillDescription2, skillDescription3, CDtime, 
        equipment1, equipment2, recommend, recomName, value  } = route.params;
    const { colorMode } = useColorMode();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [change, setChange] = useState(true);
  const changeIcon = () => {
    setChange(!change);
  };
    const ifEquip =(type) => {
        switch (type) {
            case "傷害抵抗":
                return color = colorMode == "light" ? "#785140":"#AD9185";
            case "冷卻":
                return color = colorMode == "light" ? "#9A308F":"#CE64C3";
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
    const recommendBox = (pick, pickName) => {
            return(
                <Center mr={11}>
                    <Image
                    width="50"
                    height="50"
                    source={{uri: pick}}
                    alt="pickImage"
                    />
                    <Text fontSize={12} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"#F8F8F8"}>{pickName}</Text>
                </Center>
            );
    }
    const { isOpen, onOpen, onClose } = useDisclose();
    return(
        <ScrollView style={{flex: 1,backgroundColor:colorMode == "light" ? "#F8F8F8" : "#2E2015"}}>

            <Center mt={2} mb={50}>
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
                {/* removeFromLike */}
                <TouchableOpacity   onPress={() => { addToLike (),changeIcon() }}>
                {change ? 
                    <HStack bg="#FFC764" width="315" h="50" alignItems="center" justifyContent="center"
                        borderColor="#2E2015"
                        borderRadius={10}>
                        <MaterialCommunityIcons 
                        name={'plus-circle'} 
                        color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} 
                        size={20}
                        
                        />
                        <Text ml={2} fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015" : "#f8f8f8"}>我 的 愛 餅</Text>
                    </HStack>:
                    <HStack bg="#FFC764" width="315" h="50" alignItems="center" justifyContent="center"
                    borderColor="#2E2015"
                    borderRadius={10}>
                    <MaterialCommunityIcons 
                    name={'plus-circle'} 
                    color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} 
                    size={20}
                    
                    />
                    <Text ml={2} fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015" : "#f8f8f8"}>移 除 愛 餅</Text>
                </HStack>
                    }
            </TouchableOpacity>    
            <TouchableOpacity position="absolute" top={0}right={0}mb={5} mt={1} onPress={() => { removeFromLike ()}}>

                    <HStack bg="#FFC764" width="315" h="50" alignItems="center" justifyContent="center"
                        borderColor="#2E2015"
                        borderRadius={10}>
                        <MaterialCommunityIcons 
                        name={'plus-circle'} 
                        color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} 
                        size={20}
                        
                        />
                        <Text ml={2} fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015" : "#f8f8f8"}>我 的 愛 餅</Text>
                    </HStack>
               
            </TouchableOpacity>
                <Box width={315} borderRadius={6} bg={colorMode == "light" ? "white" : "#564334"}>
                    <Text color={colorMode == "light" ? "#2E2015" : "#F8F8f8"} fontSize={15} fontWeight="bold" 
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
                            <VStack h="50%" w="100%" borderTopRadius={20} bg={colorMode == "light" ? 'rgba(255,199,100,0.95)':'rgba(96,74,57,0.95)'}>
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
                        {equipNum(equipment1, equipment2)}    
                    </Center>
                    
                    <Center>
                        <Text mb={17} fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"#FFC764"}>推薦搭配餅乾</Text>
                        <HStack mb={15}>
                            {recommendBox(recommend[0], recomName[0])}
                            {recommendBox(recommend[1], recomName[1])}
                            {recommendBox(recommend[2], recomName[2])}
                            {recommendBox(recommend[3], recomName[3])}
                        </HStack>
                    </Center>

                    <Center mb={10}>
                        <VictoryChart polar 
                            // theme={VictoryTheme.material}
                            maxDomain={{ y: 50 }}
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
                                    {x:"公會",y:value[0]},
                                    {x:"蘇打群島",y:value[1]},
                                    {x:"競技場",y:value[2]},
                                    {x:"守護之戰",y:value[3]},
                                    {x:"推圖",y:value[4]}
                                ]}
                                width={250}
                                height={250}
                            />
                            <VictoryPolarAxis
                                labelPlacement="vertical"
                                style={{
                                    grid: {stroke:colorMode == "light" ? "#2E2015":"#F8F8F8",strokeWidth: '2',},
                                    tickLabels: {fill:colorMode == "light" ? "#2E2015":"#F8F8F8",fontSize:"12px",fontWeight:"bold",},
                                    axis: {
                                        stroke: colorMode == "light" ? "#2E2015":"#F8F8F8",strokeWidth: '2',
                                    },
                                }}
                                width={250}
                                height={250}
                            />
                        </VictoryChart>
                        <Text color={colorMode == "light" ? "#2E2015" : "#F8F8f8"} fontSize={15} fontWeight="bold">就業領域合適度</Text>
                    </Center>

                    <Box height={38} borderBottomRadius={6} bgColor="#FFC764"></Box>
                </Box>
            </Center>
        </ScrollView>
    );
}

export default CookieScreen;