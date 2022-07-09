import React from 'react';

import { useState } from 'react';


import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

import {
    Colors,
    DebugInstructions,
    // Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/Header';
import TodoItem from './src/components/TodoItem';
import AddTodo from './src/components/AddTodo';

const Section = ({ children, title }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [todos, setTodos] = useState([
        { text: 'write some code', id: 1 },
        { text: 'create an App', id: 2 },
        { text: 'play some game', id: 3 }
    ]);

    const deleteTodo = (itemId) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== itemId);
        });
    }

    const addTodo = (newTodo) => {
        setTodos((prevTodos) => {
            return [newTodo, ...prevTodos]
        })
    }

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}


            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View>




                    <View style={styles.container}>
                        <View style={styles?.content}>
                            <AddTodo addTodo={addTodo} />
                            <View style={styles?.list}>
                                <ScrollView
                                    // contentInsetAdjustmentBehavior="automatic"
                                    style={backgroundStyle}
                                >
                                    <FlatList
                                        data={todos}
                                        renderItem={({ item }) => (
                                            <TodoItem
                                                item={item}
                                                deleteTodo={deleteTodo}
                                            />
                                        )}
                                    />
                                </ScrollView>

                            </View>
                        </View>
                    </View>

                </View>
            </TouchableWithoutFeedback>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    content: {
        padding: 40,

    },
    list: {
        marginTop: 20
    }
});

export default App;
