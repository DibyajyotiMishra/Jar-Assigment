/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
// import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Text} from '../../components';
import {COLORS} from '../../constants';
import {
  clearMovieDetails,
  setSearchQuery,
  setSearchResult,
} from '../../redux/actions/action';
import Categories from './Catergories';
import GenreResult from './Genre';
import styles from './styles';
// import SearchResults from './SearchResults';

const HomeScreen = ({setSearchQuery, setSearchResult, clearDetails}: any) => {
  const [searchQuery, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    clearDetails();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  function onChangeText(val: string) {
    setQuery(val);
  }
  function handleSubmit() {
    console.log(searchQuery);

    setSearchQuery(searchQuery);
    setSearchResult(searchQuery);
  }

  function onPress() {
    console.log('click');
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text content="Hey there 👋," type="title" />
          <Text content="What's on your watchlist today ?" type="subTitle" />
          <View style={styles.inputContainer}>
            <Icon name="search" color={COLORS.secondary} size={18} />
            <TextInput
              style={styles.input}
              value={searchQuery}
              onChangeText={onChangeText}
              placeholder="Search for your favorite movies..."
              placeholderTextColor={COLORS.secondary}
              selectionColor={COLORS.secondary}
              onSubmitEditing={handleSubmit}
            />
          </View>
          <Categories />
          {loading ? (
            <ActivityIndicator style={styles.activityIndicator} />
          ) : (
            <>
              <GenreResult />
              <Button buttonText={'Load More'} onPress={onPress} />
            </>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (store: any) => ({
  movieList: store.movies.movies,
});

const mapDispatchToProps = (dispatch: any) => ({
  setSearchQuery: (query: string) => dispatch(setSearchQuery(query)),
  setSearchResult: (query: string) => dispatch(setSearchResult(query)),
  clearDetails: () => dispatch(clearMovieDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
