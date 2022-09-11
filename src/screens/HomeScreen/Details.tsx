/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, heightToDp, widthToDp} from '../../constants';
import {Banner, Text} from '../../components';
import config from '../../config';
import genreTypes from './genreTypes';

const Details = ({sheetRef, movie}: any) => {
  function handlePress() {
    sheetRef.current.close();
  }

  const genres = genreTypes.filter(genre => {
    return movie?.genre_ids?.some((gid: number) => gid === genre.id);
  });

  console.log(genres);

  return (
    <RBSheet
      ref={ref => {
        sheetRef.current = ref;
      }}
      height={heightToDp('100%')}
      openDuration={500}
      closeDuration={500}>
      <SafeAreaView style={styles.sheetContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Pressable onPress={handlePress}>
            <Icon
              name="close"
              size={40}
              color={COLORS.secondary}
              style={styles.sheetCloseStyle}
            />
          </Pressable>
          <View style={styles.sheetContentStyle}>
            <Banner type="xl" styles={styles.bannerStyles}>
              <View style={styles.imageContainer}>
                <FastImage
                  source={{
                    uri: `${config.IMAGE_URL}${movie?.poster_path}`,
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                  style={styles.imageStyle}
                />
              </View>
            </Banner>
            <View style={styles.header}>
              <Text type="subTitle" content={movie?.title} />
              <View style={styles.subHeading}>
                <Text
                  type="small"
                  content={`Released on: ${movie?.release_date} |`}
                />
                <View style={styles.rating}>
                  <Text
                    type="small"
                    content={(movie?.vote_average / 2).toString()}
                  />
                  <Icon name="star" color="yellow" size={16} />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              {genres.map(genre => (
                <View style={styles.tags} key={genre.id}>
                  <Text
                    type="small"
                    content={genre.name}
                    styles={{fontWeight: '400'}}
                  />
                </View>
              ))}
            </View>
            <View style={styles.overview}>
              <Text type="body" content="Overview" />
              <Text
                type="small"
                styles={{marginTop: heightToDp('1.5%')}}
                content={movie?.overview}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </RBSheet>
  );
};

const mapStateToProps = (store: any) => ({
  movieType: store.movies.movieType,
  movie: store.movies.currentMovie,
});

export default connect(mapStateToProps)(Details);

const styles = StyleSheet.create({
  sheetCloseStyle: {
    textAlign: 'right',
    marginTop: widthToDp('3%'),
    marginRight: widthToDp('5%'),
    marginLeft: widthToDp('3%'),
  },
  sheetContainer: {
    backgroundColor: COLORS.primary,
    height: '100%',
  },
  sheetContentStyle: {
    left: widthToDp('5%'),
  },
  bannerStyles: {
    width: widthToDp('54%'),
    height: heightToDp('35%'),
    alignSelf: 'center',
    marginRight: widthToDp('15%'),
    marginTop: heightToDp('5%'),
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 25,
  },
  header: {
    marginTop: heightToDp('3%'),
    marginLeft: widthToDp('3%'),
    marginRight: widthToDp('9%'),
  },
  subHeading: {
    flexDirection: 'row',
  },
  rating: {
    flexDirection: 'row',
    marginLeft: widthToDp('1%'),
  },
  tags: {
    marginTop: heightToDp('1%'),
    marginLeft: widthToDp('3%'),
    width: widthToDp('20%'),
    height: 20,
    borderRadius: 50,
    backgroundColor: '#454B6B',
    alignItems: 'center',
  },
  overview: {
    marginRight: widthToDp('10%'),
    marginTop: heightToDp('2%'),
    marginLeft: widthToDp('3%'),
  },
});
