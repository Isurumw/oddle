/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import {AlertProvider} from 'contexts/alert';
import {SharedProvider} from 'contexts/shared';
import RootStackNavigator from 'navigation/root-stack-navigator';

import Alert from 'components/alert';

const App = () => {
  return (
    <>
      <AlertProvider>
        <SharedProvider>
          <Alert />
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </SharedProvider>
      </AlertProvider>
    </>
  );
};

export default App;
