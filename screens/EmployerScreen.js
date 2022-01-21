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



const EmployerScreen = ({navigation}) => {

    const {signOut} = React.useContext(AuthContext);
    //const userToken = AsyncStorage.getItem('userToken');
    
    const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('userToken');
          const value1 = await AsyncStorage.getItem('username');
          const value2 = await AsyncStorage.getItem('password');
          const value3 = await AsyncStorage.getItem('name');
          const value4 = await AsyncStorage.getItem('surname');
          const value5 = await AsyncStorage.getItem('isAvaileble');
          const value6 = await AsyncStorage.getItem('isEmployer');

          if (value !== null) {
            // We have data!!
            alert( 'N A M E:                           ' +  value3 + '\n' + 'S U R N A M E:        ' + value4+ '\n' + 'I S  A V A I L A B L E:    ' +  value5+ '\n' + 'I S  E M P L O Y E R:      ' + value6);
          }
        } catch (error) {
          // Error retrieving data
        }
      };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>HIT THE ROAD TRUCK</Text>
          </View>
          <Animatable.View 
              animation="fadeInUpBig"
              style={styles.footer}
          >
  
              <View style={styles.button}>
              <TouchableOpacity
                      onPress={() => {retrieveData()}}
                      style={[styles.signIn, {
                        borderColor: 'burlywood',
                        borderWidth: 2,
                        backgroundColor: 'cornsilk',
                        marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {             
                          color: 'burlywood'
                      }]}>Profile</Text>
                  </TouchableOpacity>
  
                  <TouchableOpacity
                      onPress={() => alert('Task added')}
                      style={[styles.signIn, {
                        borderColor: 'burlywood',
                        borderWidth: 2,
                        backgroundColor: 'cornsilk',
                        marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: 'burlywood'
                      }]}>Add Task</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      onPress={() => alert('Select Employee')}
                      style={[styles.signIn, {
                        borderColor: 'burlywood',
                        borderWidth: 2,
                        backgroundColor: 'cornsilk',
                        marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: 'burlywood'
                      }]}>Check Task</Text>
                  </TouchableOpacity>
  
                  <TouchableOpacity
                      onPress={() => signOut()}
                      style={[styles.signIn, {
                        borderColor: 'burlywood',
                        borderWidth: 2,
                        backgroundColor: 'cornsilk',
                        marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: 'burlywood'
                      }]}>SignOut</Text>
                  </TouchableOpacity>
              </View>
          </Animatable.View>
        </View>
      );
    };
    
    export default EmployerScreen
  
    const styles = StyleSheet.create({
      container: {
        flex: 1, 
        backgroundColor: 'burlywood'
      },
      header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 55,
        paddingBottom: 60
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
        color: 'cornsilk',
        textAlign: "center",
        fontFamily: "Verdana-BoldItalic",
        fontWeight: 'bold',
        fontSize: 30,
        letterSpacing: 3
      },
      text_footer: {
        color: '#05375a',
        fontSize: 17,
        letterSpacing: 4
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
        borderRadius: 25
      },
      textSign: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "Verdana",
        letterSpacing: 5,
        textTransform: "uppercase",
        color: "burlywood"
      }
    });