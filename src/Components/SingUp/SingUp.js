import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function SingUp({navigation}) {

    const [stateInputs, setStateInputs] = useState({
        name: '',
        userName: '',
        password: '',
        confirmPassword: ''
    })

    const { name, userName, password, confirmPassword } = stateInputs

    const onChangeInputs = (e, inputName) => {
        setStateInputs({
            ...stateInputs,
            [inputName]: e
        })
    }

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.container}>

                <View style={styles.form}>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => onChangeInputs(e, 'name')}
                            value={name}
                            placeholder="Nombre"
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => onChangeInputs(e, 'userName')}
                            value={userName}
                            placeholder="Nombre de usuario"
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => onChangeInputs(e, 'password')}
                            value={password}
                            placeholder="Contraseña"
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => onChangeInputs(e, 'confirmPassword')}
                            value={confirmPassword}
                            placeholder="Repita la contraseña"
                        />
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('OtherInfo1')}
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
    text: {
        color: '#fff'
    },
    form: {
        width: 300,
        gap: 20
    },
    input: {
        backgroundColor: '#F5F7F8',
        color: '#000',
        borderRadius: 8,
        paddingHorizontal: 8,
        height: 40,
    },
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
    }
})
