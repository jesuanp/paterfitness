import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, Image } from 'react-native';

// Importing Components
import SignIn from './src/Components/SignIn/SignIn';
import SingUp from './src/Components/SingUp/SingUp';
import OtherInfo1 from './src/Components/SingUp/OtherInfo/OtherInfo1';
import OtherInfo2 from './src/Components/SingUp/OtherInfo/OtherInfo2';

// const Stack = createBottomTabNavigator()
// const Stack = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function Logo () {
  return (
    <Image
      style={{width: 170, height: 35}}
      source={require('./src/images/Logo.png')}
    />
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
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
      </NavigationContainer>

      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#141414'}
      />
    </>
  );
}
