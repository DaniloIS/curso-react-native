import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator()

import { Instagram } from '../components/Module03/Instagram';
import { BottomTabs } from './tabs.routes';
import { Details } from '../pages/Details';

const StackTabs = () => {
  return (
    <AppStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <AppStack.Screen name='dashboard' component={Instagram} />
    <AppStack.Screen name='home' component={BottomTabs} />
    <AppStack.Screen name='details' component={Details} />
  </AppStack.Navigator>
  )
}

export { StackTabs }