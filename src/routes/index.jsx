import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BoardView from '../views/BoardView';
import ListView from '../views/ListView';

export default createAppContainer(createStackNavigator({
  BoardView,
  ListView,
}));
