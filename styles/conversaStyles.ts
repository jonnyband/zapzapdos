import {StyleSheet, Dimensions} from 'react-native'
import Background from '../assets/background.png'
import { TabView, SceneMap } from 'react-native-tab-view';
import Ionicons from '@expo/vector-icons/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export const styles = StyleSheet.create({

    body:{display:'flex'
        ,
        flexDirection:'column',


},
    head:{
        backgroundColor:'#075E54',
        height:30
    },

    head2:{
        backgroundColor:'#128C7E',
        height: 110,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignContent:'center'
    },

    row:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        marginTop:20,
        padding:20
    },

    title:{
        fontSize:20,
        color:'white'
    },

    iconView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        height:30,
        width:60,
    },


  chatCard:{
    height:windowHeight/10,
    width:windowWidth,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
    padding:20
  },

  img:{
    borderRadius:50,
    height:50,
    width:50
  },

  col:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignContent:'center',
    marginLeft:10
  },

  row2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    
  }




  })