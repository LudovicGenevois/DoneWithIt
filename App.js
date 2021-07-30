import 'react-native-gesture-handler';
import React from 'react';
import HomeNavigator from './app/navigations/HomeNavigator';

export default function App() {
  const isLogged = true;
  return (
    <HomeNavigator></HomeNavigator>
  );
}