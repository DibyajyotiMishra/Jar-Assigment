/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, heightToDp, widthToDp} from '../../constants';
import {Banner, Text} from '../../components';

const Details = ({sheetRef}: any) => {
  function handlePress() {
    sheetRef.current.close();
  }

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
                    uri: 'https://cdn.pixabay.com/photo/2022/09/07/10/01/landscape-7438429__340.jpg',
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                  style={styles.imageStyle}
                />
              </View>
            </Banner>
            <View style={styles.header}>
              <Text type="subTitle" content="Movie Name" />
              <View style={styles.subHeading}>
                <Text type="small" content="Released on: 1972-03-14 |" />
                <View style={styles.rating}>
                  <Text type="small" content="4.5" />
                  <Icon name="star" color="yellow" size={16} />
                </View>
              </View>
            </View>
            <View style={styles.tags}>
              <Text type="small" content="crime" styles={{fontWeight: '400'}} />
            </View>
            <View style={styles.overview}>
              <Text type="body" content="Overview" />
              <Text
                type="small"
                styles={{marginTop: heightToDp('1.5%')}}
                content="Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge."
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </RBSheet>
  );
};

export default Details;

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
    width: widthToDp('15%'),
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
