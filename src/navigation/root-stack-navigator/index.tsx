import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BOTTOM_TAB_NAVIGATOR, WEB_VIEW_SCREEN} from '../';

import BottomNavigator from '../bottom-tab-navigator';
import WebViewScreen from 'screens/web-view-screen';

interface IRootStackProps {
  initialRouteName?: any;
}

type RootStackParams = {
  [BOTTOM_TAB_NAVIGATOR]: undefined;
  [WEB_VIEW_SCREEN]: WebViewParams;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigator: React.FC<IRootStackProps> = ({initialRouteName}) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName || BOTTOM_TAB_NAVIGATOR}>
      <Stack.Screen
        name={BOTTOM_TAB_NAVIGATOR}
        component={BottomNavigator}
        options={{
          headerShown: false,
          gestureEnabled: false,
          animation: 'none',
        }}
      />
      <Stack.Screen
        name={WEB_VIEW_SCREEN}
        component={WebViewScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
