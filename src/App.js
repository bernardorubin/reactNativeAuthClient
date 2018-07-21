import { Navigation } from 'react-native-navigation';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import startPrivate from './Screens/startPrivateScreen';
import AuthScreen from './Screens/AuthScreen';
import CreateAccount from './Screens/CreateAccount';
import PrivateScreen from './Screens/Private';

//you may connect these with the redux store by passing a third argument
Navigation.registerComponent('client.AuthScreen', () => AuthScreen);
Navigation.registerComponent('client.CreateAccount', () => CreateAccount);
Navigation.registerComponent('client.PrivateScreen', () => PrivateScreen);

AsyncStorage.getItem('x-auth').then(token => {
  axios.get('http://192.168.1.64:3000/private/private', {
    headers: {
      'x-auth': token,
    }
  }).then(res => {
    if (res.status == 200) {
      return startPrivate();
    }
    return Navigation.startSingleScreenApp({
      screen: {
        screen: "client.AuthScreen"
      }
    })
  }).catch(() => {
    return Navigation.startSingleScreenApp({
      screen: {
        screen: "client.AuthScreen"
      }
    })
  })
})