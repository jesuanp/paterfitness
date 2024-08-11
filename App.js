import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import SwitchAuthentication from './src/Components/SwitchAuthentication/SwitchAuthentication';

// Context
import UserState from './src/context/userContext/UserState'

export default function App() {
  return (
    <>
      <UserState>
        <NavigationContainer>
          <SwitchAuthentication />
        </NavigationContainer>

        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'#141414'}
        />
      </UserState>
    </>
  );
}
