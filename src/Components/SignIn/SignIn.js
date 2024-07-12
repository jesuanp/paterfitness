import { View, Text, TouchableOpacity } from 'react-native'

import React from 'react'

export default function SignIn({ navigation }) {
  return (
    <View>
      <Text>SignIn</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Singup')}>
        <Text>Go to SingUp</Text>
      </TouchableOpacity>
    </View>
  )
}