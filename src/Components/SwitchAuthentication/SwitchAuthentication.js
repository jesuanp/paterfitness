import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'

// Components Of Login
import SingUp from '../SingUp/SingUp';
import SignIn from '../SignIn/SignIn';
import OtherInfo1 from '../SingUp/OtherInfo/OtherInfo1';
import OtherInfo2 from '../SingUp/OtherInfo/OtherInfo2';
import LandingPage from '../LandingPage/LandingPage';

// Components
import Logo from './Logo';
import Home from '../Home/Home';

const Stack = createNativeStackNavigator()

export default function SwitchAuthentication() {

    const [login, setLogin] = useState(false)

    if(login) {
        return (
          <Stack.Navigator
            screenOptions={{
              headerTitle: '',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#141414',
              },
              headerShadowVisible: true,
              headerLeft: () => <Logo />,
            }}
          >

            <Stack.Screen
                name='Home'
                children={() => (
                  <Home setLogin={setLogin} />
                )}
            />

          </Stack.Navigator>
        )
    }

    return (
        <Stack.Navigator
          screenOptions={{
            headerTitle: '',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#141414',
            },
            headerShadowVisible: true,
            headerLeft: () => <Logo />,
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
                children={() => (
                  <SignIn setLogin={setLogin} />
                )}
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