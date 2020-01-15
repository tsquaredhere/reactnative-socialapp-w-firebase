import {createAppContainer, createSwitchNvaigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyCQJeq2jIuGJKisnkUO8SKpJdBlZBviDIo",
  authDomain: "socialapp-5f0b3.firebaseapp.com",
  databaseURL: "https://socialapp-5f0b3.firebaseio.com",
  projectId: "socialapp-5f0b3",
  storageBucket: "socialapp-5f0b3.appspot.com",
  messagingSenderId: "178201199967",
  appId: "1:178201199967:web:406a97b89399427f0062ea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const APpStack = createStackNvigator({
  Home: HomeScreen
})

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
      {
          Loading: LoadingScreen,
          App: AppStack,
          Auth: AuthStack
      },
      {
          initialRouteName: "Loading"
      }
  )
);
