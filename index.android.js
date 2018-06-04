import React,{Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';
export default class MyApp extends Component{
render(){
return(
<View>
    <Text>buenos dias</Text>
</View>

);

}

}
App.Registry.registerComponent('MyApp',()=>MyApp);