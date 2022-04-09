import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import HotAlbumDetail from "./HotAlbumDetail";
import sections from "../json/album_section.json";

const Albumlist = ({ list, navigation }) => {
  const renderSectionHeader = ({section}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList 
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <HotAlbumDetail navigation={navigation} album={item} />}
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
    return <AlbumDetail album={item} navigation={navigation}/>
  };

  return (
    <SectionList 
      sections={sections}
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
    fontSize: 24,
    paddingTop: 8,
    paddingBottom: 5,
    paddingLeft: 10,
    
  },
})

export default Albumlist;



