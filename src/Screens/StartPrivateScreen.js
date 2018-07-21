import { Navigation } from 'react-native-navigation';


const startSingleScreen = () => {
  return Navigation.startSingleScreenApp({
    screen: {
      screen: 'client.PrivateScreen',
      title: 'Welcome to my private screen',
    },
  })
}

export default startSingleScreen;