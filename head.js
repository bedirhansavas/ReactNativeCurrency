import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput} from 'react-native';

class HeaderArea extends Component{
    render(){
        
        return(
          
      <View style={styles.header} >
        
          <Text style={styles.headerText}>Currency Converter</Text>
          
      </View>
      
        )
    }
}
const styles = StyleSheet.create({
    
    
    header:{
        height:60,
        backgroundColor:'#F1C40F',
        shadowColor: '#000000',
        shadowOffset :{width:0, height:2},
        shadowOpacity: 0.3,
      justifyContent :'center',
      alignItems:'center',
     },
     headerText:{
      fontSize:23,
      fontWeight: 'bold',

     }

   });
export default HeaderArea;