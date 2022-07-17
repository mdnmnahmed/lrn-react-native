import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { About, Home, Messages, Profile, Settings } from '../screens';
import { CustomDrawer } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerLabelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold'
                },
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff'
            }}
        >
            <Drawer.Screen component={Home} name="Home" options={{
                // drawerIcon: ({ color }) => (
                //     <Ionicons name="home-outline" size={22} color={color} />
                // ),
                headerShown: false
            }} />
            <Drawer.Screen component={Profile} name="Profile" options={{ headerShown: true }} />
            <Drawer.Screen component={Messages} name="Messages" options={{ headerShown: true }} />
            <Drawer.Screen component={About} name="About" options={{ headerShown: true }} />
            <Drawer.Screen component={Settings} name="Settings" options={{ headerShown: true }} />
        </Drawer.Navigator>
    );
}

export default AppStack;
