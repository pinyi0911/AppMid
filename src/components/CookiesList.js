import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import CookiesDetail from "./CookiesDetail";
import sections from "../json/cookiesList.json"

const CookiesList = ({ navigation }) => {
  // const renderItem = ({ item }) => <CookiesDetail cookies={item} navigation={navigation} />
  const renderSectionHeader = ({section}) => (
    <>
    <Text style={styles.title}>{section.title}</Text>
    {section.horizontal ? (
      <FlatList
        _dark={{ bg: "#2E2015" }}
        _light={{ bg: "#f8f8f8" }}
        horizontal={false}//其他地方需要水平排可以用
        data={section.data}
        renderItem={({ item }) => <CookiesDetail cookies={item} navigation={navigation} />}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        numColumns={3}
      />
    ) : null}   
    </>
  );
  const renderItem = ({ section }) => {
    if (section.horizontal) {
      return null;
    }
  };
  return (
    <SectionList 
      sections={sections}
      stickySectionHeadersEnabled={false}
      showsVerticalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  ); 

}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    paddingBottom: 1.5,
    margin: 3,
    marginTop: 10,
    color: "#CAC6C4",
    borderBottomWidth: 1,
    borderBottomColor: "#CAC6C4",
  },
})

export default CookiesList;