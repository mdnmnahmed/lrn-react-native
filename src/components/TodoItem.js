import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const TodoItem = ({ item, deleteTodo }) => {
    return (
        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

export default TodoItem;

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
});