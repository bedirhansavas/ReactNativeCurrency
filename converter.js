import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput} from 'react-native';
import axios from 'axios';

class Converter extends Component{
    constructor(props){
        super(props);

        this.state ={
            tr: '',
            usd: '',
            cad: '',
            jpy: '',
            eur: '',
            input: '',  
            rates: [],
                 
        }
        this.getRates=this.getRates.bind(this);
    }

    getRates(){
        axios.get('http://data.fixer.io/api/latest?access_key=3452bdb8fd16393eb76903861b358c0e&format=1&symbols=EUR,TRY,USD,CAD,JPY')
        .then(response => {
            console.log(response);
            const rates = response.data.rates;
            this.setState({
                rates
            })
        })
    }
    componentDidMount(){
       this.getRates();
    }
    
    render(){
        const{ input,tr,usd,cad,jpy,eur,rates}=this.state;
        return(
            
      <View style={styles.content} >
         
          <TextInput placeholder='Enter EUR Value'
          style={styles.inputStyle}
          keyboardType='numeric'
          onChange={(text)=>{
              const i= parseFloat(text);

              this.setState({
                  input: text,
                  tr: ( i * rates['TRY']),
                  usd: ( i * rates['USD']),
                  cad: ( i * rates['CAD']),
                  jpy: ( i * rates['JPY']),
                  eur: ( i * rates['EUR']),
              })
          }} value={input}/>


          <Text style={styles.textStyle}>TRY {tr}:</Text>
          <Text style={styles.textStyle}>USD {usd}:</Text>
          <Text style={styles.textStyle}>CAD {cad}:</Text>
          <Text style={styles.textStyle}>JPY {jpy}:</Text>
          <Text style={styles.textStyle}>EUR {eur}:</Text>
          
      </View>
        )
    }
}
const styles=StyleSheet.create(
    {

    content: {
            paddingTop: 10,
            paddingLeft: 15,
    },

    inputStyle : {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 40,
        paddingBottom: 10,
    },
    textStyle:{
        fontSize:15,
        width:170,
        height:50,
        fontWeight: 'bold',
    },

    }
);


export default Converter;