import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { Image } from 'react-native';

// Components
import SingUp from '../SingUp/SingUp';
import SignIn from '../SignIn/SignIn';
import OtherInfo1 from '../SingUp/OtherInfo/OtherInfo1';
import OtherInfo2 from '../SingUp/OtherInfo/OtherInfo2';
import LandingPage from '../LandingPage/LandingPage';

const Stack = createNativeStackNavigator()

function Logo () {
    return (
      <Image
        style={{width: 170, height: 35}}
        source={require('../../images/Logo.png')}
      />
    )
}

export default function SwitchAuthentication() {

    // const [login, setLogin] = useState(false)

    // if(login) {
    //     return;
    // }

    return (
        <Stack.Navigator
          screenOptions={{
            headerTitle: '',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#141414',
            },
            headerShadowVisible: true,
            headerLeft: () => <Logo />
          }}
        >

            <Stack.Screen
                name='LandingPage'
                component={LandingPage}
            />

            <Stack.Screen
                name='Singup'
                component={SingUp}
            />

            <Stack.Screen
                name='Signin'
                component={SignIn}
            />

            <Stack.Screen
                name='OtherInfo1'
                component={OtherInfo1}
            />

            <Stack.Screen
                name='OtherInfo2'
                component={OtherInfo2}
            />

        </Stack.Navigator>
    )
}