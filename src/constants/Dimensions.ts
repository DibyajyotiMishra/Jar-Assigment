import {Dimensions, PixelRatio} from 'react-native';

const deviceHeight: number = Dimensions.get('screen').height;
const deviceWidth: number = Dimensions.get('screen').width;

const appWindowHeight: number = Dimensions.get('window').height;
const appWindowWidth: number = Dimensions.get('window').width;

const widthToDp = (width: number | string): number => {
  let normalizedWidth = typeof width === 'number' ? width : parseFloat(width);
  return PixelRatio.roundToNearestPixel(
    (appWindowWidth * normalizedWidth) / 100,
  );
};

const heightToDp = (height: number | string): number => {
  let normalizedHeight =
    typeof height === 'number' ? height : parseFloat(height);
  return PixelRatio.roundToNearestPixel(
    (appWindowHeight * normalizedHeight) / 100,
  );
};

export {deviceHeight, deviceWidth, widthToDp, heightToDp};
