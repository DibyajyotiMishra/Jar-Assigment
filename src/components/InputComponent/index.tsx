import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, heightToDp, widthToDp} from '../../constants';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
}

const InputComponent = (props: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name="search" color={COLORS.secondary} size={18} />
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder="Search for your favorite movies..."
        placeholderTextColor={COLORS.secondary}
        selectionColor={COLORS.secondary}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: heightToDp('5%'),
    right: widthToDp('5%'),
    left: widthToDp('1%'),
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 50,
    width: widthToDp('85%'),
    height: 50,
    padding: 15,
  },
  input: {
    flex: 1,
    paddingLeft: 5,
    color: '#E9E9E9',
    fontSize: 16,
  },
});
