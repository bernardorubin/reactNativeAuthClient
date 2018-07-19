import { Navigation } from 'react-native-navigation';
import AuthScreen from './Screens/AuthScreen';
import CreateAccount from './Screens/CreateAccount';

Navigation.registerComponent('client.AuthScreen', () => AuthScreen);
Navigation.registerComponent('client.CreateAccount', () => CreateAccount);

Navigation.startSingleScreenApp({
  screen: {
    screen: "client.AuthScreen"
  }
})