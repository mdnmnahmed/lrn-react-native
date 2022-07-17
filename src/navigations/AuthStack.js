import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, OnBoarding } from '../screens';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={OnBoarding} name="OnBoarding" options={{ headerShown: false }} />
            <Stack.Screen component={Login} name="Login" options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}

export default AuthStack;
