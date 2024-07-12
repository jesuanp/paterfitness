import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from './Button'

const textButton = [
    'Bajar de peso',
    'Aumentar masa muscular',
    'Bajar de peso y aumentar masa muscular',
    'Disminuir el % de grasa',
    'Mejorar mi salud'
]

export default function OtherInfo2({ navigation }) {

    const [selected, setSelected] = useState(null)

    const handleButtonSelected = (index) => {
        setSelected(index)
    }

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center'}}>
            <View style={styles.container}>

                <View>
                    <View style={{...styles.button, backgroundColor: '#45474B'}}>
                        <Text style={{...styles.text, color: '#fff', fontSize: 20}}>OBJETIVOS</Text>
                    </View>
                </View>

                {
                    textButton && textButton.map(
                        (text, i) => <Button key={i} text={text} index={i} selected={selected} handleButtonSelected={handleButtonSelected} />
                    )
                }

                {
                    selected != null
                    && (
                        <View style={styles.containerButton}>
                            <TouchableOpacity
                                style={styles.buttonSave}
                            >
                                <Text>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#141414',
    },
    container: {
        // backgroundColor: '#676767',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    text: {
        color: '#000',
        fontSize: 18
    },
    button: {
        backgroundColor: '#F5F7F8',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    containerButton: {
        width: 300,
        alignItems: 'flex-end'
    },
    buttonSave: {
        backgroundColor: '#F9D949',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 999,
        marginTop: 100,
    },
})
