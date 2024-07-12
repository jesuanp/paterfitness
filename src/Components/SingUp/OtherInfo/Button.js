import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Button({text, index, selected, handleButtonSelected}) {

    return (
        <View style={styles.containerButton}>
            <TouchableOpacity
                style={{...styles.button, backgroundColor: `${selected === index ? '#F9D949' : '#F5F7F8' }`}}
                onPress={() => handleButtonSelected(index)}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center'
    },
    containerButton: {
    },
    button: {
        backgroundColor: '#F5F7F8',
        width: 300,
        height: 50,
        justifyContent: 'center',
        borderRadius: 8,
    },
})
