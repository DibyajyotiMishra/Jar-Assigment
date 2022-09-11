import React, {useRef} from 'react';
import {View, Pressable, StyleSheet, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Banner, Button, Text} from '../../components';
import {deviceWidth, heightToDp} from '../../constants';
import Details from './Details';
import Filters from './Filters';
import styles from './styles';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Third Item',
  },
  {
    title: 'Fourth Item',
  },
];

const Genre = () => {
  const filtersRef = useRef<any>();
  const detailsRef = useRef<any>();
  let pageNumber = 1;
  function onPress() {
    detailsRef.current.open();
  }
  function renderCards(item: any) {
    return (
      <Pressable onPress={onPress} key={item.title}>
        <Banner type="xl" styles={genreStyles.card}>
          <View style={genreStyles.cardContainer}>
            <FastImage
              source={{
                uri: 'https://cdn.pixabay.com/photo/2022/09/07/10/01/landscape-7438429__340.jpg',
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
              style={genreStyles.imageStyle}
            />
          </View>
          <Text
            type="small"
            content={item.title}
            styles={genreStyles.cardContent}
            // @ts-ignore
            ellipsizeMode="tail"
            numberOfLines={1}
          />
        </Banner>
      </Pressable>
    );
  }

  function filtersButtonClick() {
    console.log('filters click');
    filtersRef.current.open();
  }

  return (
    <>
      <View style={[styles.categoriesSection, {top: heightToDp('12%')}]}>
        <Text content="Romance" type="body" />
        <Pressable
          onPress={filtersButtonClick}
          style={{top: heightToDp('0.75%')}}>
          <Text content="Filters" type="small" dimmed />
        </Pressable>
      </View>
      <View style={genreStyles.flashListParentView}>
        <ScrollView contentContainerStyle={genreStyles.listViewStyle}>
          {DATA.map(item => renderCards(item))}
          <Button
            buttonText={`Load Page ${pageNumber + 1}`}
            onPress={onPress}
            style={{left: deviceWidth / 6.5, marginTop: heightToDp('12%')}}
          />
        </ScrollView>
        <Filters sheetRef={filtersRef} />
        <Details sheetRef={detailsRef} />
      </View>
    </>
  );
};

export default Genre;

const genreStyles = StyleSheet.create({
  flashListParentView: {
    height: '100%',
    top: heightToDp('13%'),
  },
  listViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: heightToDp('65%'),
  },
  card: {
    height: heightToDp('25%'),
    width: deviceWidth / 2 - 42,
    marginLeft: 10,
    marginTop: 40,
  },
  imageStyle: {
    height: '99.5%',
    width: '100%',
    borderRadius: 15,
  },
  cardContainer: {
    alignItems: 'center',
  },
  cardContent: {
    marginTop: 10,
  },
});
