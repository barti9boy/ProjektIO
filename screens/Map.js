import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Image, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import mapTemplate from '../map-template';


export default function App() {
  let webRef = undefined;
  let [mapCenter, setMapCenter] = useState('19.906, 50.071');
  
  const onButtonPress = () => {
    const [lng, lat] = mapCenter.split(",");
    webRef.injectJavaScript(`map.setCenter([${parseFloat(lng)}, ${parseFloat(lat)}])`);
  }

  const onButtonPress2 = () => {
    const [lng, lat] = mapCenter.split(",");
    webRef.injectJavaScript(`addMarker([${parseFloat(lng)}, ${parseFloat(lat)}])`);
    webRef.injectJavaScript(` recalculateRoutes()`);
    
  }

  const handleMapEvent = (event) => {
    setMapCenter(event.nativeEvent.data)
  }



  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TextInput 
        style={styles.textInput}
        onChangeText={setMapCenter}
        value={mapCenter}></TextInput>
        <Button title="Set Center" onPress={onButtonPress}></Button>
        <Button title="Add Marker" onPress={onButtonPress2}></Button>
      </View>
      <WebView
      
        ref={(r) => (webRef = r)}
        onMessage={handleMapEvent}
        style={styles.map}
        
        originWhitelist={['*']}
        source={{ html: mapTemplate }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    height: '15%',
    backgroundColor: '#fff',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginRight: 4,
  },
  textInput: {
    height: 40,
    width: "40%",
    marginRight: 12,
    paddingLeft: 5,
    borderWidth: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});