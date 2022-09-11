import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {widthToDp} from '../../constants';
import Text from '../TextComponent';

interface Props {
  buttonText: string;
  onPress: () => void;
  style?: object;
}

const Button = (props: Props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.buttonStyles, props?.style]}>
      <Text
        type="small"
        content={props.buttonText}
        // eslint-disable-next-line react-native/no-inline-styles
        styles={{fontWeight: '800'}}
      />
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyles: {
    height: 47,
    width: widthToDp('55%'),
    backgroundColor: '#546EE5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
