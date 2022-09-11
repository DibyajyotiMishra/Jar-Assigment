import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';

interface Props {
  source: string;
  style?: object;
  resizeMode: any;
}

interface Styles {
  defaultImageStyle: ImageStyle;
}

const Image = (props: Props) => {
  return (
    <FastImage
      source={{
        uri: `${props.source}`,
        priority: FastImage.priority.high,
        cache: 'immutable',
      }}
      resizeMode={FastImage.resizeMode.contain}
      style={StyleSheet.flatten([styles.defaultImageStyle, props.style])}
    />
  );
};

export default Image;

const styles = StyleSheet.create<Styles>({
  defaultImageStyle: {
    width: '100%',
    height: '100%',
  },
});
