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
});

export default styles;
