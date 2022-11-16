import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import {styles} from './styles/conversaStyles';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



import Zapzapdos from './assets/zapzapdos.png';
import Gzapzapdos from './assets/galarianzapzapdos.png';




export function Conversa() {

    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#128C7E' }}
        />
      );

    const Conversas = () => (
        <View style={{ flex: 1, backgroundColor: 'white' }} >
{/* <FlatList  
                    data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) =>  
                        <Text style={styles.item}  
                              onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}  
                    ItemSeparatorComponent={this.renderSeparator}  
                />   */}

                <View style={styles.chatCard}>
                <View style={styles.row2}>
                <Image source={Zapzapdos} style={styles.img}></Image>
                <View style={styles.col}>
                    <Text style={{fontWeight:'bold', fontSize:16 }}>Zapzapdos</Text>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Feather  name="check" size={20} color="grey" />
                    <Text style={{color:'gray'}}>Zaaap!Zaaaap!</Text>
                    </View>
                    </View>
                    <Text style={{color:'gray', marginLeft:160, fontSize:10}}>11:52</Text>
                </View>
                </View>
                

        </View>
      );
      
      const Status = () => (
         <View style={{ flex: 1, backgroundColor: 'white' }} >
{/* <FlatList  
                    data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) =>  
                        <Text style={styles.item}  
                              onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}  
                    ItemSeparatorComponent={this.renderSeparator}  
                />   */}

                <View style={styles.chatCard}>
                <View style={styles.row2}>
                <Image source={Gzapzapdos} style={styles.img}></Image>
                <View style={styles.col}>
                    <Text style={{fontWeight:'bold', fontSize:16 }}>Meu status</Text>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{color:'gray'}}>Toque para atualizar seu status</Text>
                    </View>
                    </View>
                    <Text style={{color:'gray', marginLeft:160, fontSize:10}}>11:52</Text>
                </View>
                </View>
                <Text style={{color:'gray', fontWeight:'bold', margin:20}}>Atualizações recentes</Text>
                

        </View>
      );

      const Chamadas = () => (
         <View style={{ flex: 1, backgroundColor: 'white' }} >
{/* <FlatList  
                    data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) =>  
                        <Text style={styles.item}  
                              onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}  
                    ItemSeparatorComponent={this.renderSeparator}  
                />   */}

                <View style={styles.chatCard}>
                <View style={styles.row2}>
                <Image source={Zapzapdos} style={styles.img}></Image>
                <View style={styles.col}>
                    <Text style={{fontWeight:'bold', fontSize:16 }}>Zapzapdos</Text>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Feather name="arrow-down-left" size={20} color="#25D366"/>
                    <Text style={{color:'gray'}}>Há 20 minutos atrás</Text>
                    </View>
                    </View>
                    <Foundation style={{marginLeft:130, marginTop:10}} name="telephone" size={24} color="#25D366" />
                </View>
                </View>
                

        </View>
      );
      
      const renderScene = SceneMap({
        conversas: Conversas,
        status: Status,
        chamadas: Chamadas
      });

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'conversas', title: 'conversas' },
      { key: 'status', title: 'Status ⬤' },
      { key: 'chamadas', title: 'Chamadas'}
    ]);


  
    return (
      <View style={styles.body}>
     <View style={styles.head2} >
        <View style={styles.row}>
        <Text style={styles.title}>Zapzapdos</Text>
        <View style={styles.iconView}>
        <MaterialIcons name="search" size={24} color="white" />
        <Entypo name="dots-three-vertical" size={20} color="white" />
        </View>
        
        </View>
        
     </View>
     <View style={{height:800}}>
     <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        ></TabView>
        </View>
     </View>
       
    );
  
  
  }