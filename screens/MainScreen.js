import React from "react";
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import { AuthContext } from "../context";

const MainScreen = ({navigation}) => {

    const {signOut} = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>Welcome!</Text>
          </View>
          <Animatable.View 
              animation="fadeInUpBig"
              style={styles.footer}
          >
  
              <View style={styles.button}>
              <TouchableOpacity
                      onPress={() => {loginHandle(data.username, data.password)}}
                      style={[styles.signIn, {
                          borderColor: '#009387',
                          borderWidth: 1,
                          marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: '#009387'
                      }]}>Profile</Text>
                  </TouchableOpacity>
  
                  <TouchableOpacity
                      onPress={() => navigation.navigate('TomTomMap')}
                      style={[styles.signIn, {
                          borderColor: '#009387',
                          borderWidth: 1,
                          marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: '#009387'
                      }]}>Map</Text>
                  </TouchableOpacity>
  
                  <TouchableOpacity
                      onPress={() => signOut()}
                      style={[styles.signIn, {
                          borderColor: '#009387',
                          borderWidth: 1,
                          marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: '#009387'
                      }]}>SignOut</Text>
                  </TouchableOpacity>
              </View>
          </Animatable.View>
        </View>
      );
    };
    
    export default MainScreen
  
    const styles = StyleSheet.create({
      container: {
        flex: 1, 
        backgroundColor: '#009387'
      },
      header: {
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 50
      },
      footer: {
          flex: 3,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 30
      },
      text_header: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 30
      },
      text_footer: {
          color: '#05375a',
          fontSize: 18
      },
      action: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          paddingBottom: 5
      },
      textInput: {
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 0 : -12,
          paddingLeft: 10,
          color: '#05375a',
      },
      button: {
          alignItems: 'center',
          marginTop: 50
      },
      signIn: {
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10
      },
      textSign: {
          fontSize: 18,
          fontWeight: 'bold'
      }
    });