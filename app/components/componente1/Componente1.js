import React,{Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';
export default class Componente1 extends Component{
    constructor(props){
            super(props);
            this.estado={
                mensaje:this.props.mensaje,

            }

    }
    static defaultProps={
        mensaje:'hola ahi'

    }
render(){
return(
        <View>
        <Text>buenos dias</Text>
        <Text>{this.estado.mensaje}</Text>
           </View>
    );

    }

}

AppRegistry.registerComponent('Componente1',()=>Componente1);