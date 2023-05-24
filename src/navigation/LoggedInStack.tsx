import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import HomeScreen from 'screens/LoggedInStack/HomeScreen';

import {RouteNames} from 'constants/routeNames';

const Stack = createStackNavigator();

const LoggedInStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={HomeScreen} name={RouteNames.HomeScreen} />
    </Stack.Navigator>
  );
};

export default LoggedInStack;
