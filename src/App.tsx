import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LeitorCodeBar from './pages/LeitorCodeBar';
import Detalhes from './pages/Detalhes';
import { Button, SafeAreaView } from 'react-native';
import { AntDesign, Ionicons } from "@expo/vector-icons"


export default function App() {
  
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#131418',
            borderTopColor: 'rgba(255,255,255,0.3)',
          }, 
          activeTintColor: '#fff',
          inactiveTintColor: '#92929c'
        }}      
      >
        <Tab.Screen 
          name="Home" 
          component={LeitorCodeBar} 
          options={{
            title: 'Leitor',
            tabBarIcon: ({ color, size}) => (
              <Ionicons name="md-qr-scanner" size={size} color={color}/>
            )
          }}
        />
        <Tab.Screen 
          name="Details" 
          component={Detalhes} 
          options={{
            title: 'Detalhes',
            tabBarIcon: ({ color, size}) => (
              <AntDesign name="profile" size={size} color={color}/>
            )
          }}

        />
      </Tab.Navigator>
    </NavigationContainer>
    
  );

}
