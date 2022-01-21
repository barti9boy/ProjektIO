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


const SignUp = ({navigation}) => {

    const [data, setData] = React.useState({
      email: '',
      password: '',
      confirmPassword: '',
      check_textInputChange: false,
      secureTextEntry: true,
      confirmSecureTextEntry: true
    });
  
    const textInputChange = (val) => {
      if( val.length !== 0 ) {
          setData({
              ...data,
              email: val,
              check_textInputChange: true
          });
      } else {
          setData({
              ...data,
              email: val,
              check_textInputChange: false
          });
      }
  }
      const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
      }

      const handleConfirmPasswordChange= (val) => {
        setData({
            ...data,
            confirmPassword: val
        });
      }
  
      const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
      }

      const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        });
      }

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
              <Text style={styles.text_footer}>Email</Text>
              <View style={styles.action}>
                  <FontAwesome 
                      name="user-o"
                      color="#05375a"
                      size={20}
                  />
                  <TextInput 
                      placeholder="Your Email"
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={(val) => textInputChange(val)}
                  />
                  {data.check_textInputChange ? 
                  <Animatable.View
                      animation="bounceIn"
                  >
                      <Feather 
                          name="check-circle"
                          color="green"
                          size={20}
                      />
                  </Animatable.View>
                  : null}
              </View>

              
  
              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Password</Text>
              <View style={styles.action}>
                  <Feather 
                      name="lock"
                      color="#05375a"
                      size={20}
                  />
                  <TextInput 
                      placeholder="Your Password"
                      secureTextEntry={data.secureTextEntry ? true : false}
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={(val) => handlePasswordChange(val)}
                  />
                  <TouchableOpacity
                      onPress={updateSecureTextEntry}
                  >
                      {data.secureTextEntry ? 
                      <Feather 
                          name="eye-off"
                          color="grey"
                          size={20}
                      />
                      :
                      <Feather 
                          name="eye"
                          color="grey"
                          size={20}
                      />
                      }
                  </TouchableOpacity>
              </View>

              <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Confirm Password</Text>
              <View style={styles.action}>
                  <Feather 
                      name="lock"
                      color="#05375a"
                      size={20}
                  />
                  <TextInput 
                      placeholder="Your Password"
                      secureTextEntry={data.confirmSecureTextEntry ? true : false}
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={(val) => handleConfirmPasswordChange(val)}
                  />
                  <TouchableOpacity
                      onPress={updateConfirmSecureTextEntry}
                  >
                      {data.confirmSecureTextEntry ? 
                      <Feather 
                          name="eye-off"
                          color="grey"
                          size={20}
                      />
                      :
                      <Feather 
                          name="eye"
                          color="grey"
                          size={20}
                      />
                      }
                  </TouchableOpacity>
              </View>
  
              <View style={styles.button}>
                  <LinearGradient
                      colors={['burlywood']}
                      //style={styles.signIn}
                      style={[styles.signIn, {
                        borderColor: 'burlywood',
                        borderWidth: 2,
                        marginTop: 15
                    }]}
                  >
                      <Text style={[styles.textSign, {
                          color:'cornsilk'
                      }]}>Sign Up</Text>
                  </LinearGradient>
  
                  <TouchableOpacity
                      onPress={() => navigation.navigate('StartScreen')}
                      style={[styles.signIn, {
                        borderColor: 'burlywood',
                        borderWidth: 2,
                        backgroundColor: 'cornsilk',
                        marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: 'burlywood'
                      }]}>Sign In</Text>
                  </TouchableOpacity>
              </View>
          </Animatable.View>
        </View>
      );
    };

export default SignUp;

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