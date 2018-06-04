import React,{Component} from 'react';
import {AppRegistry,Text,View,ListView,StyleSheet} from 'react-native';
const users=[
    {name:"pepe"},
    {name:"Juan"},
    {name:"Brayan"},
    {name:"Teresa"},
]
export default class Componente4 extends Component{
constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
        userDataSource:ds.cloneWithRows(users),
    };
    
}
renderRow(user,sectionId,rowId,highlightRow){
    return(
        <View style={styles.row}>
    <Text>
        {user.name}
    </Text>
</View>

    )

}
render(){
return(
     
        
            <ListView
            dataSource={this.state.userDataSource}
            renderRow={this.renderRow.bind(this)}
            >

            </ListView>
    
    );

    }

}
const styles=StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent:'center',
        padding:10,
        backgroundColor:'red',
        marginBottom: 3,

    }

});
AppRegistry.registerComponent('Componente4',()=>Componente4);