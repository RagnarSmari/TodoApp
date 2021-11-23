import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BoardView from '../views/BoardView';
import ListView from '../views/ListView';
import CreateBoard from '../views/CreateBoard';

const Stack = createStackNavigator();

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="BoardView" component={BoardView} />
        <Stack.Screen name="ListView" component={ListView} />
        <Stack.Screen name="CreateBoard" component={CreateBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
