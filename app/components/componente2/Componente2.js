import React, { Component } from 'react';
import {AppRegistry,Text,View,StyleSheet,TouchableHighlight,TouchableOpacity} from 'react-native';
export default class Componente2 extends Component {
    onPress(){
        console.log('Area 1 presionada');
        

    }
    onPress2(){
        console.log('Area 2 presionada');
        

    }
  render() {
    return (
        <View>
      <View style={styles.myView}>
      
          <Text style={styles.myText} > Hola señor mundo</Text>  
          </View>  
              <View style={styles.myContainer} >
          
                    <TouchableHighlight 
                    onPress={this.onPress} 
                    underlayColor="blue"
                    style={styles.v1}> 
                  <View>
                        <Text>1</Text>
                       </View>
                        </TouchableHighlight>
                        
                <TouchableOpacity
                 style={styles.v2}
                onPress={this.onPress2}

                >
                    <View>
                        <Text> 2 </Text>
                        </View>
                </TouchableOpacity>
                    <View style={styles.v3}>
                        <Text>3</Text>
                        
              </View>
          
          </View>
          </View>
    )
  }
};

const styles =StyleSheet.create({
myView:{
    backgroundColor: 'blue',
},
myText:{
    color:'white'
},
myContainer:{
flexDirection: 'row',
height:100
},
v1:{
    flex:1,
    backgroundColor:'red',
    padding:10
},
v2:{
    flex:1,
    backgroundColor:'green',
    padding:10
},
v3:{
    flex:1,
    backgroundColor:'black',
    padding:10
},
});
AppRegistry.registerComponent('Componente2',()=>Componente2);