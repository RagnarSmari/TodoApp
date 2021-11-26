import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BoardView from '../views/BoardView';

const Stack = createStackNavigator();

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="BoardView" component={BoardView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
