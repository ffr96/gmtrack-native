import { Formik } from "formik";
import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { defaultStyles } from "../styles";
import TextInput from "../Components/TextInput";
import * as yup from 'yup';
import axios from "axios";
import { url } from "../utils/url";
import { useHistory } from "react-router-native";
import { useStateValue } from "../state/state";
import AuthStorage from "../utils/AuthStorage";

const initialValues = {
  username: '',
  password: ''
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
  }, 
  input: {
    textAlign: 'center'
  }
});

const validationScheme = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3,'Username needs to be longer'),
  password: yup
    .string()
    .required('Password is required')
    .min(6,'Password needs to be longer')
});

const FormikSignin = ({handleSubmit}) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.input}>Username:</Text><TextInput name='username'/>
        <Text style={styles.input}>Password:</Text><TextInput name='password' secureTextEntry/>
      </View>
      <Pressable onPress={handleSubmit} style={defaultStyles.submitButton}><Text>Submit</Text></Pressable>
    </View>
  );
};

const SigninForm = ({handleLogged}) => {
  const [, dispatch] = useStateValue();
  const auth = new AuthStorage;
  const history = useHistory();

  const handleSubmit = async(values) => {
    const { username, password } = values; 

    try {
      const res = await axios.post(`${url}/login`, {username:username, password:password});
      dispatch( {type: 'SET_USER', payload: res.data} );
      await auth.setAccessToken(res.data);
      history.push('/home');
      handleLogged();
    } catch(e) {
      console.log(e.message);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationScheme} onSubmit={handleSubmit}>
      {({handleSubmit}) => <FormikSignin handleSubmit={handleSubmit}/>}
    </Formik>
  );
};

export default SigninForm;