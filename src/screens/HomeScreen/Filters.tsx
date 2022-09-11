import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GENRE from './genreTypes';
import {COLORS, heightToDp, widthToDp} from '../../constants';
import {Button, Text} from '../../components';

const Filters = ({sheetRef}: any) => {
  const [isAdult, setIsAdult] = useState(false);
  const [genre, setGenre] = useState(0);
  function handlePress() {
    sheetRef.current.close();
  }
  function setMovieType(type: boolean) {
    setIsAdult(type);
  }
  function setMovieGenre(value: number) {
    setGenre(value);
  }

  return (
    <RBSheet
      ref={ref => {
        sheetRef.current = ref;
      }}
      height={heightToDp('40%')}
      openDuration={500}
      closeDuration={500}
      dragFromTopOnly>
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
            <Text type="small" content="Adult Rated:" />
            <Picker
              selectedValue={isAdult}
              onValueChange={setMovieType}
              itemStyle={{color: '#fff', fontSize: 14}}
              style={[styles.pickerStyles, {bottom: heightToDp('6%')}]}>
              <Picker.Item label="No" value={false} />
              <Picker.Item label="Yes" value={true} />
            </Picker>
          </View>
          <View style={[styles.sheetContentStyle, {bottom: heightToDp('14%')}]}>
            <Text type="small" content="Genre:" />
            <Picker
              selectedValue={genre}
              onValueChange={setMovieGenre}
              itemStyle={{color: '#fff', fontSize: 14}}
              style={styles.pickerStyles}>
              <Picker.Item label="Choose Genre" key="#" />
              {GENRE.map(genre => (
                <Picker.Item
                  label={genre.name}
                  value={genre.id}
                  key={genre.id}
                />
              ))}
            </Picker>
          </View>
          <Button
            style={{bottom: heightToDp('14%')}}
            buttonText={'Save'}
            onPress={() => console.log('saved')}
          />
        </ScrollView>
      </SafeAreaView>
    </RBSheet>
  );
};

export default Filters;

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
  pickerStyles: {
    width: widthToDp('50%'),
    color: '#fff',
    // bottom: heightToDp('5%'),
  },
  sheetContentStyle: {
    left: widthToDp('5%'),
  },
});
