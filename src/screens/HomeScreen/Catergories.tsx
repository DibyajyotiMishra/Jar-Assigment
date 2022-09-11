/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState} from 'react';
import {Pressable, View} from 'react-native';
import {connect} from 'react-redux';
import {Banner, Text} from '../../components';
import {fetchMovies, setMovieType} from '../../redux/actions/action';
import styles from './styles';

export const GENRES = [
  {
    id: 1,
    type: 'Trending',
    icon: '🤩',
    requestType: 'popular',
  },
  {
    id: 2,
    type: 'Latest',
    icon: '🫣',
    requestType: 'now_playing',
  },
  {
    id: 3,
    type: 'Most Loved',
    icon: '🥰',
    requestType: 'top_rated',
  },
  {
    id: 4,
    type: 'Upcoming',
    icon: '🤔',
    requestType: 'upcoming',
  },
];

const Categories = ({setMovieType, fetchMovies}: any) => {
  const [type, setType] = useState<string>('popular');
  const [page] = useState<number>(1);

  useEffect(() => {
    fetchMovies(type, page);
  }, [type, page, fetchMovies]);

  function handlePress(genre: any) {
    setType(genre.requestType);
    setMovieType(genre.requestType);
  }
  return (
    <>
      <View style={styles.categoriesSection}>
        <Text content="Categories" type="body" />
      </View>
      <View style={styles.categoriesButtons}>
        {GENRES.map(genre => (
          <Pressable
            style={styles.buttons}
            key={genre.id}
            onPress={() => handlePress(genre)}>
            <Banner type="md" styles={styles.bannerStyles}>
              <Text
                type="small"
                content={genre.icon}
                styles={{textAlign: 'center', fontSize: 18}}
              />
              <Text type="small" content={genre.type} styles={{fontSize: 10}} />
            </Banner>
          </Pressable>
        ))}
      </View>
    </>
  );
};

const mapStateToProps = (store: any) => ({
  movieList: store.movies.movies,
});

const mapDispatchToProps = (dispatch: any) => ({
  setMovieType: (type: string) => dispatch(setMovieType(type)),
  fetchMovies: (type: string, page: number) =>
    dispatch(fetchMovies(page, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
