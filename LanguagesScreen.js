import React, { useState } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import LanguageItem from './components/LanguageItem';

export default function Languages () {
  const [languages, setLanguages] = useState([
    { id: '1', lang: 'JavaScript', experience: 3 },
    { id: '2', lang: 'Python', experience: 2 },
    { id: '3', lang: 'C++', experience: 4 },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setLanguages([
        { id: '1', lang: 'JavaScript', experience: 4 },
        { id: '2', lang: 'Python', experience: 3 },
        { id: '3', lang: 'C++', experience: 5 },
        { id: '4', lang: 'Go', experience: 1 },
      ]);
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        renderItem={({ item }) => (
          <LanguageItem lang={item.lang} experience={item.experience} />
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: '#000',
  },
});