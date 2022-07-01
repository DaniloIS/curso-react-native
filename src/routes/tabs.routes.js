import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const AppBottomTabs = createBottomTabNavigator();

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';


const BottomTabs = () => {

  return (
    <AppBottomTabs.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let icon;
        
        switch(route.name) {
          case 'home':
            icon = 'home'
          break
          case 'profile':
            icon = 'user'
          break
        }
        
        return <Feather name={String(icon)} size={size} color={color} />;
      },
    })}
      tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray'
    }}>
      <AppBottomTabs.Screen name='home' component={Home} options={{
        title: 'Início'
      }} />
      <AppBottomTabs.Screen name='profile' component={Profile} options={{
        title: 'Perfil'
      }} />
    </AppBottomTabs.Navigator>
  )
}

export { BottomTabs }