import React, { Component } from 'react';
import {AppRegistry,View,Text,TextInput,Switch} from 'react-native';
export default class Componente3 extends Component {
  constructor(){
      super();
      this.state={
          textValue:'hola',
          switchValue:false
      }
  

  }
  onChangeText(value){//al cambiar texto
    this.setState({
      textValue:value,
      
    })
    

  }
  onSubmitEditing(){//al apretar enter
    console.log("input submitted")
  }
  onValueChange(value){

      this.setState({

        switchValue:value
      });

    
  }
  render() {
    return (
    <View>
        <TextInput placeholder="escribe texto"
          value={this.state.textValue}
          onChangeText={(value)=>this.onChangeText(value)}
          onSubmitEditing={this.onSubmitEditing}
        >
            </TextInput>
            <Text>
               {this.state.textValue}
            </Text>
            <Switch
              value={this.state.switchValue}
              onValueChange={(value)=>this.onValueChange(value)}
            >


            </Switch>
        </View>
    )
  }
};
AppRegistry.registerComponent('componente3',()=>Componente3);
