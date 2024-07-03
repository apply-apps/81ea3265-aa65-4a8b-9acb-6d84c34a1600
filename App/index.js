// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';

const translations = {
    "hello": "привет",
    "world": "мир",
    "how are you?": "как дела?",
    "good morning": "доброе утро",
    "good night": "спокойной ночи",
    // Add more mock translations as needed
};

async function translate(text) {
    return translations[text.toLowerCase()] || "Translation not available";
}

export default function App() {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslate = async () => {
        const translation = await translate(text);
        setTranslatedText(translation);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>English to Russian Translator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter text in English"
                value={text}
                onChangeText={setText}
            />
            <Button title="Translate" onPress={handleTranslate} />
            <View style={styles.box}>
                <Text style={styles.translatedText}>{translatedText}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    input: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        marginBottom: 20,
        width: '100%',
    },
    box: {
        backgroundColor: '#F3F4F6',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    translatedText: {
        fontSize: 20,
        color: '#333333',
    },
});