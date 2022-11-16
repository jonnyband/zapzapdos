import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {styles} from '../../styles/loginStyles';
import { Conversa } from './conversa';

export const Login = props => {

  
    return (
      
         <View style={styles.view}>
          <Text style={styles.headerText}>Insira seu número de telefone</Text>
        <Text style={styles.plainText}>O Zapzapdos enviará um SMS para verificar o seu número de telefone. Insira o código de país e número do seu telefone:</Text>
        <View style={styles.row} ><Text style={styles.grayText}>+     </Text><TextInput style={styles.textInput2}></TextInput><TextInput style={styles.textInput}></TextInput></View>
        <Text style={styles.grayText}>Sujeita a cobranças de tarifas de SMS de sua operadora</Text>
        <View style={styles.button}>
        <Button  color='#25D366' title='Avançar' onPress={()=>props.navigation.navigate('Conversa')}></Button>
        </View>
         </View>
       
    );
  
  
  }
  


