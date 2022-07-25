import React, {  useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { BackButton, Route, Switch, useHistory } from "react-router-native";
import Constants from 'expo-constants';

import AppBar from "./Components/AppBar";
import Home from "./Home";
import SignIn from './SignIn';
import { useStateValue } from "./state/state";
import TrainingLog from './TrainingLog';
import AuthStorage from "./utils/AuthStorage";
import AddTraining from "./AddTraining";


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: Constants.statusBarHeight,
  }
});

const Main = () => {
  const auth = new AuthStorage;
  const history = useHistory();
  const [, dispatch] = useStateValue();
  const [ logged, setLogged ] = useState(true);

  useEffect(()=>{
    console.log('trying login');
    const tryLogin = async() => {
      const user = await auth.getAccessToken();
      if (user) {
        dispatch( {type: 'SET_USER', payload: user});
        console.log('login successful');
        history.push('/home');
      } else {
        setLogged(false);
      }
    };
    tryLogin();
  },[]);

  const handleLogged = () => {
    setLogged(!logged);
  };

  return (
      <View style={styles.container}>
       <AppBar logged={logged} handleLogged={handleLogged}/>
        <Switch> 
          <Route path='/home' exact>
            <Home/>
          </Route>
          <Route path='/signin' exact>
            <SignIn handleLogged={handleLogged}/>
          </Route>
          <Route path='/traininglog'>
            <TrainingLog/>
          </Route>
          <Route path='/newtraininglog'>
            <AddTraining/>
          </Route>
        </Switch>
        
        <BackButton/> 
      </View>
  );
};

export default Main;