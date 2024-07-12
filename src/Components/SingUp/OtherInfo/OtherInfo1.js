import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import InputDate from './inputs/InputDate'
import Select from './inputs/Select'

// Arrays
import { ages } from './inputs/arrays/ages'
import { statureArray } from './inputs/arrays/stature'
import { weightArray } from './inputs/arrays/weight'
import { occupationArray } from './inputs/arrays/occupation'
import { dailyActivityArray } from './inputs/arrays/dailyActivity'
import { doesHeDoSportsArray } from './inputs/arrays/doesHeDoSports'
import { frequencyArray } from './inputs/arrays/frequency'

export default function OtherInfo1({ navigation }) {

    // const [stateInputs, setStateInputs] = useState({
    //     birth: '',
    //     age: '',
    //     im: '',
    //     stature: '',
    //     weight: '',
    //     occupation: '',
    //     dailyActivity: '',
    //     doesHeDoSports: '',
    //     frequency: '',
    // })

    // const { birth, age, im, stature, weight, occupation, dailyActivity, doesHeDoSports, frequency } = stateInputs

    // const onChangeInputs = (e, inputName) => {
    //     setStateInputs({
    //         ...stateInputs,
    //         [inputName]: e
    //     })
    // }

    // const onChangeInputsNumber = (e, inputName) => {
    //     setStateInputs({
    //         ...stateInputs,
    //         [inputName]: e.replace(/[^0-9]/g, '')
    //     })
    // }


    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.container}>

                <View style={styles.form}>

                    <View style={styles.infoInRow}>
                        <InputDate />
                        <Select width={60} arrayInfo={ages} placeholder={'Edad'} />
                        <Select width={98} arrayInfo={['Hombre', 'Mujer']} placeholder={'Soy'} />
                    </View>

                    <View style={styles.infoInRow}>
                        <Select width={147} arrayInfo={statureArray} placeholder={'Estatura'} />
                        <Select width={147} arrayInfo={weightArray} placeholder={'Peso'} />
                    </View>

                    <Select width={'auto'} arrayInfo={occupationArray} placeholder={'Ocupación'} />
                    
                    <Select width={'auto'} arrayInfo={dailyActivityArray} placeholder={'¿Qué tan activo suele ser tu día?'} />
                    
                    <Select width={'auto'} arrayInfo={doesHeDoSportsArray} placeholder={'¿Practica alguna actividad deportiva?'} />
                    
                    <Select width={'auto'} arrayInfo={frequencyArray} placeholder={'Indique la frecuencia'} />

                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('OtherInfo2')}
                    >
                        <Text>Guardar</Text>
                    </TouchableOpacity>
                </View>

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
    },
    form: {
        width: 300,
        gap: 20
    },
    // input: {
    //     backgroundColor: '#F5F7F8',
    //     color: '#000',
    //     borderRadius: 8,
    //     paddingHorizontal: 8,
    //     height: 40,
    // },
    containerButton: {
        width: 300,
        alignItems: 'flex-end'
    },
    button: {
        backgroundColor: '#F9D949',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 999,
        marginTop: 100,
    },
    infoInRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    }
})
