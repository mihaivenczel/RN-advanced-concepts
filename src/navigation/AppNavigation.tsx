import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import LoggedInStack from 'navigation/LoggedInStack';
import LoggedOutStack from 'navigation/LoggedOutStack';

import {StackNames} from 'constants/routeNames';
import {colors} from 'themes/resources';

const Stack = createStackNavigator();

const AppNavigation: React.FC = () => {
  const isUserLoggedIn = true;

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isUserLoggedIn ? (
          <Stack.Screen
            name={StackNames.LoggedInStack}
            component={LoggedInStack}
          />
        ) : (
          <Stack.Screen
            name={StackNames.LoggedOutStack}
            component={LoggedOutStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
