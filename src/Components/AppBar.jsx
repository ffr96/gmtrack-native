import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useHistory } from 'react-router-native';
import { useStateValue } from "../state/state";
import { defaultStyles } from "../styles";
import { theme } from "../theme";
import AuthStorage from "../utils/AuthStorage";

const styles = StyleSheet.create({
  container: {
    justifyContent:'flex-start',
    backgroundColor: theme.backgroundColors.secondary,
    marginTop: 10,
    maxHeight: 50
  },
  touchableView: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
    borderRightWidth: 0.5,
    height: 50
  },
  touchable: {
    borderRightColor: 'orange',
    borderRightWidth: 1,
    borderLeftColor: 'orange',
    borderLeftWidth: 1,    
    justifyContent: 'center',
    borderRadius: 5,
    height: 38
  },  
  text: defaultStyles.fontTitle
});

const AppBar = ({logged, handleLogged}) => {
  const [, dispatch] = useStateValue();
  const history = useHistory();

  const handlePress = async(forw) => {
    const auth = new AuthStorage;
    if (forw === 'signout') {
      await auth.removeAccessToken();
      dispatch( {type: 'SET_USER', payload: null });
      handleLogged(false);
      history.push('/');
    } else {
      history.push(`/${forw}`);
    }
  }; 

  return (
    <View style={styles.container}>
      <View style={styles.touchableView}>
        {
          !logged &&
          <TouchableOpacity style={styles.touchable} onPress={() => handlePress("signin")}>
            <Text style={styles.text}> Sign in </Text>
          </TouchableOpacity>
        }

        <TouchableOpacity style={styles.touchable} onPress={() => handlePress("home")}>
          <Text style={styles.text}> Home </Text>
        </TouchableOpacity>

        {
          logged &&
          (
          <>
            <TouchableOpacity style={styles.touchable} onPress={() => handlePress("traininglog")}>
              <Text style={styles.text}> Training Log </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={() => handlePress("signout")}>
              <Text style={styles.text}> Sign out </Text>
            </TouchableOpacity>
          </>
          )
          ||
          <TouchableOpacity style={styles.touchable} onPress={() => handlePress("signup")}>
            <Text style={styles.text}> Sign up </Text>
          </TouchableOpacity>
        }


      </View>
    </View>
  );
};

export default AppBar;