import React from 'react';

import { useState } from 'react';


import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, FlatList, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

import {
    Colors,
    // DebugInstructions,
    // // Header,
    // LearnMoreLinks,
    // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CharacterLappy from './assets/images/character_lappy.svg';

// import Header from './src/components/Header';
// import TodoItem from './src/components/TodoItem';
// import AddTodo from './src/components/AddTodo';

// const Section = ({ children, title }) => {
//     const isDarkMode = useColorScheme() === 'dark';
//     return (
//         <View style={styles.sectionContainer}>
//             <Text
//                 style={[
//                     styles.sectionTitle,
//                     {
//                         color: isDarkMode ? Colors.white : Colors.black,
//                     },
//                 ]}>
//                 {title}
//             </Text>
//             <Text
//                 style={[
//                     styles.sectionDescription,
//                     {
//                         color: isDarkMode ? Colors.light : Colors.dark,
//                     },
//                 ]}>
//                 {children}
//             </Text>
//         </View>
//     );
// };

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    // const [todos, setTodos] = useState([
    //     { text: 'write some code', id: 1 },
    //     { text: 'create an App', id: 2 },
    //     { text: 'play some game', id: 3 }
    // ]);

    // const deleteTodo = (itemId) => {
    //     setTodos((prevTodos) => {
    //         return prevTodos.filter(todo => todo.id !== itemId);
    //     });
    // }

    // const addTodo = (newTodo) => {
    //     setTodos((prevTodos) => {
    //         return [newTodo, ...prevTodos]
    //     })
    // }

    // const dismissKeyboard = () => {
    //     Keyboard.dismiss();
    // }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <View style={{ marginTop: 100 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#20315f' }}>Hello Hero 😎, Welcome</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
                <CharacterLappy
                    width={300}
                    height={300}
                    style={{ transform: [{ rotate: '10deg' }] }}
                />
            </View>

            <TouchableOpacity style={{ backgroundColor: '#AD40AF', paddingHorizontal: 20, paddingVertical: 10, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>Next</Text>
                <MaterialCommunityIcons name="menu-right-outline" size={22} color='#fff' />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// const styles = StyleSheet.create({
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//     },
//     highlight: {
//         fontWeight: '700',
//     },
//     content: {
//         padding: 40,

//     },
//     list: {
//         marginTop: 20
//     }
// });

export default App;
