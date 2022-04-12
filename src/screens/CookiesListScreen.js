import React, { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Divider, Box, Center, ScrollView, Text, useColorMode } from "native-base";
import CookiesList from "../components/CookiesList";
import cookiesData from "../json/cookiesList.json";

const CookiesListScreen = ({navigation}) => {
const { colorMode } = useColorMode();
const [selectedIndex, setSelectedIndex] = useState(0);
const SegmentedContent = () => {
    if(selectedIndex == 0){
        return (
            <ScrollView style={{flex: 1,backgroundColor:colorMode == "light" ? "#f8f8f8" : "#2E2015"}}>
            <Center  mb={30}>
                <Box 
                    bg={colorMode == "light" ? "#f8f8f8" : "#2E2015"} 
                    flex={1}>
                    <Text color="#CAC6C4" fontSize={12} mt="10" ml="3" mr="3" mb="3" paddingBottom={1.5} 
                    borderBottomWidth={1} borderBottomColor="#CAC6C4">
                        {cookiesData.title1}</Text>
                    <CookiesList
                        list={cookiesData.data1}
                        navigation={navigation}
                    />
                    <Text color="#CAC6C4" fontSize={12} mt="10" ml="3" mr="3" mb="3" paddingBottom={1.5} 
                    borderBottomWidth={1} borderBottomColor="#CAC6C4">
                        {cookiesData.title2}</Text>
                    <CookiesList
                        list={cookiesData.data2}
                        navigation={navigation}
                    />
                    <CookiesList
                        list={cookiesData.data3}
                        navigation={navigation}
                    />
                    <CookiesList
                        list={cookiesData.data4}
                        navigation={navigation}
                    />
                    <CookiesList
                        list={cookiesData.data5}
                        navigation={navigation}
                    />
                </Box>
            </Center>
            </ScrollView>
        );
    }else{
        return (
            <Center 
            bg={colorMode == "light" ? "#f8f8f8" : "#2E2015"}  flex={1}>
                <Text>another page</Text>
            </Center>
        );
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