import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native'
import AppStructure from '../AppStructure/AppStructure'
import React, { useState } from 'react'

// Auth with Firebase
import { appFirebase, auth } from '../../config/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function SignIn({ navigation, setLogin }) {

  const [stateInputs, setStateInputs] = useState({
    email: '',
    password: ''
  })

  const { email, password } = stateInputs

  const onChangeInputs = (e, inputName) => {
    let text = e
    if(inputName == 'email') {
      text = e.toLowerCase()
    }
    setStateInputs({
      ...stateInputs,
      [inputName]: text
    })
  }

  const onSubmit = async() => {

    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(email.trim() == '') {
      return Alert.alert('Falta el correo')
    }
    if(!validEmail.test(email)) {
      return Alert.alert('Hay parametros mal escrito en el correo')
    }
    if(password.trim() == '') {
      return Alert.alert('Falta la contraseña')
    }

    try {

      await signInWithEmailAndPassword(auth, email, password)

      Alert.alert('Sesión Iniciada')

      auth.onAuthStateChanged(user => {
        console.log(user)
        if(user && user.emailVerified){
          setLogin(user.emailVerified)
        }
      })
      
    } catch (error) {
      if(error.code == 'auth/invalid-credential') {
        // console.log('Correo o contraseña incorrectas')
        Alert.alert('Correo o contraseña incorrectas')
      }
    }
  }

  return (
    <AppStructure style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={styles.container}>

              <View style={styles.form}>
                  <View>
                      <TextInput
                          style={styles.input}
                          onChangeText={(e) => onChangeInputs(e, 'email')}
                          value={email}
                          placeholder="ejemplo@gmail.com"
                      />
                  </View>
                  <View>
                      <TextInput
                          style={styles.input}
                          onChangeText={(e) => onChangeInputs(e, 'password')}
                          value={password}
                          placeholder="Contraseña"
                          secureTextEntry={true}
                      />
                  </View>
              </View>

              <View style={styles.containerButton}>
                  <TouchableOpacity
                      style={styles.button}
                      onPress={onSubmit}
                  >
                      <Text>Guardar</Text>
                  </TouchableOpacity>
              </View>

          </View>
    </AppStructure>
  )
}

const styles = StyleSheet.create({
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