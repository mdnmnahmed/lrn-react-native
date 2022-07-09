import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const AddTodo = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const submitTodo = () => {
        const newTodoData = {
            text: newTodo,
            id: Date.now()
        }

        addTodo(newTodoData);
        setNewTodo('');
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="New Todo.."
                value={newTodo}
                onChangeText={(value) => setNewTodo(value)}
            />
            <Button
                onPress={submitTodo}
                title='Add'
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});

export default AddTodo;