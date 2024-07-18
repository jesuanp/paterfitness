import { View, Text, Button } from 'react-native'
import React from 'react'
import { auth } from '../../config/firebase'
import { colors } from '../../colors'

export default function Home({ setLogin }) {

    const onClickSignOut = () => {
        auth.signOut()
        setLogin(false)
    }

  return (
    <View>
        <Text>Home</Text>
        <Button title='Info Login' color={colors.primary} onPress={() => auth.onAuthStateChanged(user => {console.log(user)})} />
        <Button title='Cerrar Sesión' color={'red'} onPress={onClickSignOut} />
    </View>
  )
}