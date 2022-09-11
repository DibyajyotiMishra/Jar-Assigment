import React, {useState} from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {Text, TextInput} from '../../components';
import Categories from './Catergories';
import GenreResult from './Genre';
import styles from './styles';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  function onChangeText(val: string) {
    setSearchQuery(val);
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text content="Hey there 👋," type="title" />
          <Text content="What's on your watchlist today ?" type="subTitle" />
          <TextInput value={searchQuery} onChangeText={onChangeText} />
          <Categories />
          <GenreResult />
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
