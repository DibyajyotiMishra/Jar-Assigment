import React, {FC, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// @ts-ignore
import SplashScreen from 'react-native-animated-splash-screen';

import Home from './screens/HomeScreen';

const NavigationStack = createNativeStackNavigator();

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <NavigationStack.Screen name="Home" component={Home} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};

const RootNavigator: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, [isLoaded]);

  return (
    <SplashScreen
      translucent={true}
      isLoaded={isLoaded}
      logoImage={require('./assets/logo.png')}
      backgroundColor={'#070D2E'}
      logoHeight={500}
      logoWidth={500}>
      <Navigator />
    </SplashScreen>
  );
};

export default RootNavigator;
