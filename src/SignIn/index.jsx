import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import SigninForm from './SigninForm';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
    margin: 10,
  },
  image: {
    alignSelf: 'center',
    margin: 10,
    width: 330,
    height: 220,
  },
});

const SignIn = ({ handleLogged }) => {
  return (
    <ScrollView>
      <SigninForm handleLogged={handleLogged} />
    </ScrollView>
  );
};

export default SignIn;
