import React, { Component } from 'react';
import {View,StyleSheet,AppRegistry,Text,ListView} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const LATITUDEDELTA=0.09;
const LONGITUDEDELTA=0.09;
const coordenadas=[{
    title: 'hello',
    coordinates: {
      latitude: -17.799395,
      longitude: -63.184070
    },
  },
  {
    title: 'hello',
    coordinates: {
        latitude: -17.799350,
        longitude: -63.18490
    },  
  }]

export default class Mapa extends Component {
    constructor(){
        super();
        this.state={
            inicial:{
            longitude:-17.799395,
            latitude:-63.184070,
            latitudeDelta:LATITUDEDELTA,
            longitudeDelta:LONGITUDEDELTA
            },
            markers: coordenadas,
    }
}

    onPress(coord){
       console.log(coord);
         this.setState({
             longitude:coord.longitude,
             latitude:coord.latitude
         });
    }
    onLongPress(coord){
        console.log("presione mucho rato")
        coordenadas.push({
            title: 'hello',
            coordinates: {
                latitude: coord.latitude,
                longitude: coord.longitude
            }, 
        });

      this.setState({markers: coordenadas}); 
        console.log(this.state.markers)
    }
    renderMarkers(){
        
        markers=[]
        for(marker of this.state.markers)
        {

            markers.push(
                <MapView.Marker 
                  coordinate={{
                      longitude:marker.coordinates.longitude,
                      latitude:marker.coordinates.latitude
            
                  }}
                  title={marker.title}
                />
            )

        }
        return markers;
    }
    semontoComponente()
    {
        navigator.geolocation.getCurrentPosition((position)=>{

        });
    }

  render() {
    return (

      <View style={styles.Contenedor}>
          <MapView style={styles.Mapa}
    
    // initialRegion={{
    //         latitude:-17.799395,
    //         longitude:-63.184070,
    //         latitudeDelta:0.1,
    //         longitudeDelta:0.1,
    //     }}
        initialRegion={this.state.inicial}

        onPress={(coord)=>this.onPress(coord.nativeEvent.coordinate)}
         onLongPress={(coord)=>this.onLongPress(coord.nativeEvent.coordinate)}
  
          >

        {this.renderMarkers()}

      
              </MapView>
              
          </View>
    )
  }
};

const styles = StyleSheet.create({
    Contenedor: { ... StyleSheet.absoluteFillObject },
    Mapa: { ...StyleSheet.absoluteFillObject }
  })
AppRegistry.registerComponent('Mapa',()=>Mapa);