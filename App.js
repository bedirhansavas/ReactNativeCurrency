
import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

import HeaderArea from './head'
import Converter from './converter'

/*
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/
export default class App extends Component{
  render(){
  return (
    
      <View style={styles.container}>
     
      <HeaderArea/>
      <Converter/>
      
      </View>

     
      
     
   
  );
  }
};

const styles = StyleSheet.create({
 container:{
   backgroundColor: '#ABEBC6',
   flex: 1
 },
 
});

//export default App;
