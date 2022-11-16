import {StyleSheet} from 'react-native'
import Background from '../assets/background.png'


export const styles = StyleSheet.create({

    image:{
      flex:1,
      justifyContent:"center"
    },

    view:{
      display:'flex',
      flexDirection:'column',
      alignContent:'space-around',
      justifyContent:'space-around',
      alignItems:'center',
      textAlign: 'center',
      marginTop: 100,
      margin: 40

    },

    row:{
      display: 'flex',
      flexDirection:'row',
      alignContent:'flex-start',
      justifyContent:'center',
      width:400,
      height:50,
      marginTop: 30
    },


    textInput:{
      borderBottomWidth: 1,
      borderBottomColor: '#075E54',
    
      height: 30
      ,
      width:140
    },

    textInput2:{
      borderBottomWidth: 1,
      borderBottomColor: '#075E54',
      marginRight: 10,
      height: 30,
      width: 20
      
    },

    grayText:{
      color:'gray'
    },

    headerText:{
      color:'#075E54'
    }
    ,

    plainText:{
      marginTop: 30
    },

    button:{
      marginTop: 100
    }
  
  })