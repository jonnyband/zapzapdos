import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {styles} from './styles/loginStyles';
import Background from './assets/background.png';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from './login'
import { Conversa } from './conversa';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //   <Stack.Screen name="Login" component={Login}/>

  //     </Stack.Navigator>


  // </NavigationContainer>
  // <Login></Login>
  <Conversa></Conversa>
   
     
  );


}

