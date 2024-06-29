import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainBottomTabNavigator from './navigators/MainBottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainBottomTabNavigator />
    </NavigationContainer>
  );
}