import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {styles} from './styles/loginStyles';
import Background from './assets/background.png';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from './src/screens/login'
import { Conversa } from './src/screens/conversa';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>

<Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen name="Conversa" component={Conversa} />
      </Stack.Navigator>


  </NavigationContainer>


   
     
  );


}

