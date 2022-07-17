import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen component={Home} name="Home" options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default AppStack;
