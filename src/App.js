import { Navigation } from 'react-native-navigation';
import AuthScreen from './Screens/AuthScreen';
import CreateAccount from './Screens/CreateAccount';
import PrivateScreen from './Screens/Private';

//you may connect these with the redux store by passing a third argument
Navigation.registerComponent('client.AuthScreen', () => AuthScreen);
Navigation.registerComponent('client.CreateAccount', () => CreateAccount);
Navigation.registerComponent('client.PrivateScreen', () => PrivateScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "client.AuthScreen"
  }
})