/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Pressable, View} from 'react-native';
import {Banner, Text} from '../../components';
import styles from './styles';

const GENRES = [
  {
    id: 1,
    type: 'Trending',
    icon: '🤩',
    requestType: 'trending',
  },
  {
    id: 2,
    type: 'Latest',
    icon: '🫣',
    requestType: 'latest',
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

const Categories = () => {
  function handlePress(genre: {type: any}) {
    console.log(genre.type);
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

export default Categories;
