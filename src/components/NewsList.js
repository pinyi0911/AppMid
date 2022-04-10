import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import NewsDetail from "./NewsDetail";
import news from "../json/news.json";

const NewsList = ({ navigation }) => {
  const renderSectionHeader = ({section}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList 
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <NewsDetail navigation={navigation} news={item} />}
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
      sections={news}
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
    paddingTop: 45,
    paddingBottom: 5,
    paddingLeft: 10,
    color:"#2E2015",
    
  },
})

export default NewsList;



