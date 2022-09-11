import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

interface Props {
  content: string;
  type: 'title' | 'subTitle' | 'body' | 'small';
  dimmed?: boolean;
  styles?: object;
  props?: any;
}

interface Styles {
  defaults: TextStyle;
}

const TextComponent = (props: Props) => {
  const textStyles = StyleSheet.flatten([
    styles.defaults,
    props.type === 'title' && {fontSize: 28, fontWeight: '600'},
    props.type === 'subTitle' && {fontSize: 22},
    props.type === 'body' && {fontSize: 18},
    props.type === 'small' && {fontSize: 14},
    props.dimmed === true && {color: '#454B6B'},
    props.styles,
  ]);
  return (
    <Text style={textStyles as TextStyle} {...props}>
      {props.content}
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create<Styles>({
  defaults: {
    color: '#DDDFFF',
    fontWeight: '500',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
  },
});
