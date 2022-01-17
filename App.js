import React from "react";
import { Text, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native'

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
      <Button title="Log in" onPress={() => Alert.alert('hello')}></Button>
    </View>
  )
}