import React from "react";
import { Text, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

const StartScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
          <Button title="Log in" onPress={() => navigation.navigate('TomTomMap')}></Button>
        </View>
  
    )
  }
  
  export default StartScreen