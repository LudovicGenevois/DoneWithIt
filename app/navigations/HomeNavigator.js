import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import ViewImageScreen from '../screens/ViewImageScreen';

const Stack = createStackNavigator();

function HomeNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}>
                </Stack.Screen>
                <Stack.Screen
                    name="SignIn"
                    component={SignInScreen}>
                </Stack.Screen>
                <Stack.Screen
                    name="Logged"
                    component={ViewImageScreen}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeNavigator;