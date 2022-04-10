import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import TeamDetail from "./TeamDetail";
import btn_team from "../json/btn_team.json";
import useColorMode from "native-base";

const TeamList = ({ navigation }) => {
  
  const renderSectionHeader = ({section}) => (
    
    <>
      <Text 
      style={styles.sectionHeader}>
      {section.title}</Text>
      {section.horizontal ? (
        <FlatList 
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <TeamDetail navigation={navigation} team={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      ) : null}
    </>
  );
  const renderItem = ({ item, section}) => {
    if (section.horizontal) {
      return null;
    }
    
  };

  return (
    <SectionList 
      sections={btn_team}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  );
};

const styles = StyleSheet.create({
  
  sectionHeader: {
    
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 40,
    paddingBottom: 5,
    paddingLeft: 10,
    color:"#2E2015",
    
  },
})

export default TeamList;