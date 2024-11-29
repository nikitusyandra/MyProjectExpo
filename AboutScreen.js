import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hi! My name is Nikita</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1918db',
    },
    text: {
        color: '#ffffff',
        fontSize: 24,
    },
});