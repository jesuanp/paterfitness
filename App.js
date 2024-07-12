import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import SwitchAuthentication from './src/Components/SwitchAuthentication/SwitchAuthentication';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <SwitchAuthentication />
      </NavigationContainer>

      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#141414'}
      />
    </>
  );
}
