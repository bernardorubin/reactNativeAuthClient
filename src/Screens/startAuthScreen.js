import { Navigation } from 'react-native-navigation';

const startSingleScreen = () => {
  return Navigation.startSingleScreenApp({
    screen: {
      screen: 'client.AuthScreen',
    },
  })
}

export default startSingleScreen;