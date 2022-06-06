import React, { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Image, Box, Center, ScrollView, Text, useColorMode } from "native-base";
import CookiesList from "../components/CookiesList";
import cookiesData from "../json/cookiesList.json";
import { useDispatch, useSelector } from "react-redux";
import { likeActions } from "../../redux/likeSlice";
import TestScreen from"./TestScreen";
const CookiesListScreen = ({navigation}) => {
    const likeItems = useSelector((state) => state.like.likeList);
    // console.log(likeItems);
    const dispatch = useDispatch();    
const { colorMode } = useColorMode();
const [selectedIndex, setSelectedIndex] = useState(0);

const SegmentedContent = () => {



    if(selectedIndex == 0){
        return (
            // <ScrollView style={{flex: 1,backgroundColor:colorMode == "light" ? "#f8f8f8" : "#2E2015"}}>
                <Center  mb={30} style={{flex: 1,backgroundColor:colorMode == "light" ? "#f8f8f8" : "#2E2015"}}>
                    <Box 
                        bg={colorMode == "light" ? "#f8f8f8" : "#2E2015"} 
                        flex={1}>
                        <CookiesList
                            list={cookiesData.data}
                            navigation={navigation}
                        />
                    </Box>
                </Center>
            // </ScrollView>
        );
    }else{
        // {likeItems.map((item) => {
        return (
            

            // <Center 
            // bg={colorMode == "light" ? "#f8f8f8" : "#2E2015"}  flex={1}>
            // {colorMode == "light" ?
            //     (<Image
            //         width= "150"
            //         height= "135"
            //         source={{uri: "https://github.com/pinyi0911/AppMid/blob/master/img/%E8%9B%8B%E7%B3%95%E7%8B%97.png?raw=true"}}
            //         alt="cakeDog"
            //         ml={15}
            //     /> ):
            //     (<Image
            //         width= "150"
            //         height= "135"
            //         source={{uri: "https://github.com/pinyi0911/AppMid/blob/master/img/%E8%9B%8B%E7%B3%95%E7%8B%97_%E5%92%96.png?raw=true"}}
            //         alt="cakeDog_Dark"
            //         ml={15}
            //     /> )}
            //     <Text fontSize={21} fontWeight="bold" color={colorMode == "light" ?"#CAC6C4":"#564334"}>尚未開放</Text>
            // </Center>
            
                    // <Box> 

                    //     <Text>{item.name}</Text>
                    // </Box>
           
                    <TestScreen/>

        );
    // })}
    }    
}

return (
    <Box flex={1}
        _dark={{ bg: "#2E2015" }}
        _light={{ bg: "#F8F8F8" }}>

        <SegmentedControlTab
            values={["全部餅乾", "我的愛餅"]}
            tabStyle={{
                marginTop: 25, marginBottom: 10, borderColor: "#FFC764", 
                borderWidth: 1,
                backgroundColor: colorMode == "light" ? "#F8F8F8" : "#2E2015"
            }}
            firstTabStyle={{ marginLeft: 76 }}
            lastTabStyle={{ marginRight: 76 }}
            tabTextStyle={{ fontSize: 15, fontWeight: "bold", padding: 1, color: colorMode == "light" ? "#CAC6C4" : "#F8F8F8", }}
            activeTabStyle={{ backgroundColor: "#FFC764" }}
            activeTabTextStyle={{ color: "white" }}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
    />
    <SegmentedContent />
    </Box>
);
}

export default CookiesListScreen ;