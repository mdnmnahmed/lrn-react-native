import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, FlatList, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CharacterLappy from '../../assets/images/character_lappy.svg';

const OnBoarding = ({ navigation }) => {
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
}

export default OnBoarding;