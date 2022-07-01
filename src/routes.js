import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackTabs } from './routes/stack.routes'; 

const Routes = () => {

 return (
  <NavigationContainer>
    <StackTabs />
  </NavigationContainer>
 )
}

export { Routes }