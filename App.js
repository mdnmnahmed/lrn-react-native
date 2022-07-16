import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, FlatList, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CharacterLappy from './assets/images/character_lappy.svg';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Main} name="Main" options={{ headerShown: false }} />
                <Stack.Screen component={Home} name="Home" options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Main = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <View style={{ marginTop: 100 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#20315f' }}>Hello Hero 😎, Welcome</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
                <CharacterLappy
                    width={300}
                    height={300}
                    style={{ transform: [{ rotate: '10deg' }] }}
                />
            </View>

            <TouchableOpacity style={{ backgroundColor: '#AD40AF', paddingHorizontal: 20, paddingVertical: 10, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 }}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>Next</Text>
                <MaterialCommunityIcons name="menu-right-outline" size={22} color='#fff' />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default App;