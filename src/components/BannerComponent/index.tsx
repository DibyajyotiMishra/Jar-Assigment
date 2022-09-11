import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {heightToDp, widthToDp} from '../../constants';

interface Props {
  children: React.ReactNode;
  type: 'sm' | 'md' | 'lg' | 'xl' | 'dynamic';
  styles?: object;
}

const BannerComponent = (props: Props) => {
  const bannerStyles = StyleSheet.flatten([
    styles.defaultStyles,
    props.type === 'sm' && {width: widthToDp(60), height: heightToDp(60)},
    props.type === 'md' && {width: widthToDp('15%'), height: heightToDp('8%')},
    props.type === 'lg' && {
      minWidth: widthToDp('15%'),
      minHeight: heightToDp('30%'),
    },
    props.type === 'dynamic' && {minWidth: widthToDp(30)},
    props.styles,
  ]);

  return <View style={bannerStyles as ViewStyle}>{props.children}</View>;
};

export default BannerComponent;

const styles = StyleSheet.create({
  defaultStyles: {
    borderRadius: 20,
    border: 0,
  },
});
