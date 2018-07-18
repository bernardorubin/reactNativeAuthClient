import { Navigation } from 'react-native-navigation';
import AuthScreen from './Screens/AuthScreen';

Navigation.registerComponent('client.AuthScreen', () => AuthScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "client.AuthScreen"
  }
})