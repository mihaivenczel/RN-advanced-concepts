import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import ForgotPasswordScreen from 'screens/LoggedOutStack/ForgotPasswordScreen';
import IntroScreen from 'screens/LoggedOutStack/IntroScreen';
import LoginScreen from 'screens/LoggedOutStack/LoginScreen';
import SignUpScreen from 'screens/LoggedOutStack/SignUpScreen';

import {RouteNames} from 'constants/routeNames';

const Stack = createStackNavigator();

const LoggedOutStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={IntroScreen} name={RouteNames.IntroScreen} />
      <Stack.Screen component={LoginScreen} name={RouteNames.LoginScreen} />
      <Stack.Screen component={SignUpScreen} name={RouteNames.SignUpScreen} />
      <Stack.Screen
        component={ForgotPasswordScreen}
        name={RouteNames.ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default LoggedOutStack;
