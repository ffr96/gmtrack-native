import React, { useEffect} from "react";
import { useStateValue } from "../state/state";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import TextTitle from "../Components/TextTitle";
import axios from "axios";
import { url } from "../utils/url";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  image:{
    margin: 20,
    height: 150,
    width: 150,
    borderRadius: 15,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});


const Home = () => {
  const [ { user }, dispatch] = useStateValue();

  useEffect(()=>{
    const setTraining = async() => {
      const res = await axios.get(`${url}/users/${user.id}/logs`);
      dispatch( {type:'SET_TRAINING_LOGS', payload: res.data} );
      console.log('Training log setted');
    };
    console.log(user);
    if (user) {
      setTraining();
    }
  },[]);

  if (!user) {
    return(
    <Link><Text>Sign in</Text></Link>
    );
  }

  return (
    <View style={styles.container}>
      <TextTitle>Welcome {user.name}</TextTitle>
      <View style={styles.imageContainer}>
        <Link to='/add' component={TouchableOpacity}><Text>Add exc to training</Text></Link>
        <Link to='/newtraininglog' component={TouchableOpacity}><Image source={require('../../assets/addTraining.png')} style={styles.image}></Image></Link>
        <Link to='/traininglog' component={TouchableOpacity}><Image source={require('../../assets/viewLogs.png')} style={styles.image}></Image></Link>
      </View>
    </View>
    
  );
};

export default Home;