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
    StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import { AuthContext } from "../context";
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorage } from 'react-native';

const userToken= '';
const username='';
const password='';

const retrieveData = async () => {
    try {
       userToken = await AsyncStorage.getItem('userToken');
       username = await AsyncStorage.getItem('username');
       password = await AsyncStorage.getItem('password');

      if (userToken !== null) {
        // We have data!!
        console.log(userToken);
        console.log(username);
        console.log(password);

      }
    } catch (error) {
      // Error retrieving data
    }
  };

const ProfileScreen = ({navigation}) => {

    const {signOut} = React.useContext(AuthContext);
    //const userToken = AsyncStorage.getItem('userToken');

    
   
      return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>Welcome {userToken}</Text>
          </View>
          <Animatable.View 
              animation="fadeInUpBig"
              style={styles.footer}
          >
  
              <View style={styles.button}>
              <TouchableOpacity
                      onPress={() => retrieveData()}
                      style={[styles.signIn, {
                          borderColor: '#009387',
                          borderWidth: 1,
                          marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: '#009387'
                      }]}>Show info</Text>
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
    
    export default ProfileScreen
  
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