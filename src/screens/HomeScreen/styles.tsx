import {StyleSheet, ViewStyle} from 'react-native';
import {COLORS, heightToDp, widthToDp} from '../../constants';

interface Styles {
  container: ViewStyle;
  content: ViewStyle;
  categoriesSection: ViewStyle;
  categoriesButtons: ViewStyle;
  buttons: ViewStyle;
  bannerStyles: ViewStyle;
  scrollViewContents: ViewStyle;
  inputContainer: ViewStyle;
  input: ViewStyle;
  activityIndicator: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  content: {
    top: heightToDp('3%'),
    left: widthToDp('7%'),
  },
  categoriesSection: {
    top: heightToDp('8%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: widthToDp('19%'),
    left: widthToDp('3%'),
  },
  categoriesButtons: {
    top: heightToDp('9%'),
    flexDirection: 'row',
    marginRight: widthToDp('19%'),
    left: widthToDp('3%'),
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bannerStyles: {
    backgroundColor: '#161A37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContents: {
    marginTop: 10,
    height: '100%',
  },
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
  activityIndicator: {
    flex: 1,
    marginTop: heightToDp('30%'),
    marginRight: widthToDp('15%'),
  },
});

export default styles;
