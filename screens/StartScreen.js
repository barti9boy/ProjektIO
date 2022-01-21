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
    Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import { AuthContext } from "../context";
import Users from "../users";

const StartScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  });

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            username: val,
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

    const updateSecureTextEntry = () => {
      setData({
          ...data,
          secureTextEntry: !data.secureTextEntry
      });
    }

    const loginHandle = (userName, password) =>{
        const foundUser = Users.filter(item => {
          return userName == item.username && password == item.password;
        })
        if(foundUser.length == 0){
          Alert.alert('INVALID USER' , 'Username or password is incorrect.', [{text: 'OK'}]);
          return;
        }
        signIn(foundUser);
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
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
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

            <View style={styles.button}>
            <TouchableOpacity
                    onPress={() => {loginHandle(data.username, data.password)}}
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

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={[styles.signIn, {
                        borderColor: 'burlywood',
                        backgroundColor: 'cornsilk',
                        borderWidth: 2,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: 'burlywood'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
  };
  
  export default StartScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'burlywood' //#009387
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
        letterSpacing: 2
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