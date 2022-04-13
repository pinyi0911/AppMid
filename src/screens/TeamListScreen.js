import React from 'react';
import { Image, Center, Text,useColorMode,Box, ScrollView} from "native-base";
import TeamData from "../json/teamList.json";
import TeamList from "../components/TeamList";

const TeamListScreen = ({ navigation }) => {
    const { colorMode } = useColorMode();
    return (
        <ScrollView style={{flex: 1,backgroundColor:colorMode == "light" ? "#f8f8f8" : "#2E2015"}}>
            <Center  mb={30} >
                <Box bg={colorMode == "light" ? "#f8f8f8" : "#2E2015"} flex={1}>
                    <Text color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} fontSize={15} fontWeight="bold" 
                    mt="6" mr="3" mb="3" pl={3} borderLeftWidth={4} borderLeftColor="#FFC764">
                            {TeamData.title1}</Text>
                    <TeamList
                        list={TeamData.data1}
                        navigation={navigation}
                    />
                    <Image
                        width= "auto"
                        height= "75"
                        source={{uri: TeamData.props1}}
                        alt="props"
                        mt={15} mb={18}
                    />
                    <Text color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} fontSize={15} fontWeight="bold" 
                    mt="6" mr="3" mb="3" pl={3} borderLeftWidth={4} borderLeftColor="#FFC764">
                            {TeamData.title2}</Text>
                    <TeamList
                        list={TeamData.data2}
                        navigation={navigation}
                    />
                    <Image
                        width= "auto"
                        height= "75"
                        source={{uri: TeamData.props1}}
                        alt="props"
                        mt={15} mb={15}
                    />
                </Box>
            </Center>
        </ScrollView>
    );
}

export default TeamListScreen ;