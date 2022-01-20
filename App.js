import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen'
import TomTomMap from './screens/Map'
import SignUp from "./screens/SignUp";
import MainScreen from './screens/MainScreen'
import ProfileScreen from './screens/ProfileScreen'



import { AuthContext } from './context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack1 = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();


const MyStack = () => {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const username = foundUser[0].username;
      const password = foundUser[0].password;
      const name = foundUser[0].name;
      const surname = foundUser[0].surname;
      const isAvaileble = foundUser[0].isAvaileble;
      const isEmployer = foundUser[0].isEmployer;


      console.log("signing in")
      //console.log(userToken)
        try {
          await AsyncStorage.setItem('userToken', userToken);
          await AsyncStorage.setItem('username', username);
          await AsyncStorage.setItem('password', password);
          await AsyncStorage.setItem('name', name);
          await AsyncStorage.setItem('surname', surname);
          await AsyncStorage.setItem('isAvaileble', isAvaileble);
          await AsyncStorage.setItem('isEmployer', isEmployer);

        } catch(e) {
          console.log(e);
        }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: username, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
       console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        
          { loginState.userToken !== null ? (
            <Stack2.Navigator>
              <Stack2.Screen name="MainScreen" component={MainScreen} />
              <Stack2.Screen name="TomTomMap" component={TomTomMap} />
              <Stack2.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack2.Navigator>
          )
          :
          <Stack1.Navigator>
            <Stack1.Screen name="StartScreen" component={StartScreen} />
            <Stack1.Screen name="SignUp" component={SignUp} />
          </Stack1.Navigator>

          }
        
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default MyStack