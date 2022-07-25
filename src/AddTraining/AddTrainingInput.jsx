import React from "react";

import SelectInput from "../Components/SelectInput";
import TextInput from "../Components/TextInput";
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { defaultStyles } from "../styles";
import { url } from '../utils/url';

import * as yup from 'yup';
import { Formik } from "formik";
import axios from "axios";

const options = [
  {value: 'chest', label: "Chest"},
  {value: 'back', label: "Back"},
  {value: 'legs', label: "Legs"},
  {value: 'abs', label: "Abs"},
  {value: 'arms', label: "Arms"},
  {value: 'shoulders', label: "Shoulders"}
];

const initialValues = {
  date: Date().slice(0,24),
  name: '',
  tags: '',
  comments: ''
};

const styles = StyleSheet.create({
  inputTitle: {
    paddingTop: 5,
    marginLeft: 5,
    fontWeight: "bold"
  },
  button: {
    ...defaultStyles.submitButton, 
    textAlign: 'center',
    alignSelf: 'center'
  }
});

const AddTrainingForm = ({onSubmit}) => {
  return(
    <View>
      <Text style={styles.inputTitle}>Date:</Text>
      <TextInput name='date'/>

      <Text style={styles.inputTitle}>Training Name:</Text>
      <TextInput name='name'/>

      <Text style={styles.inputTitle}>Tags:</Text>
      <SelectInput items={options} name='tags'>     
      </SelectInput>

      <Text style={styles.inputTitle}>Comments:</Text>
      <TextInput name='comments'/>
      <Pressable onPress={onSubmit}><Text style={styles.button}>Submit</Text></Pressable>
    </View>
  );
};

const AddTrainingInput = ({user, dispatch}) => {
  
  const handleSubmit = async(values) => {
    console.log(user.id);
    console.log(values);
    try {
      const res = await axios.post(`${url}/users/${user.id}/logs`,
      {
        date: values.date,
        name: values.name,
        exercises: [],
        tags: [],
        comments: values.comments
      });
      console.log(res);
      if (res.data) {
        dispatch({ type: 'ADD_TRAINING_LOG', payload: res.data });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return(
    <Formik initialValues={initialValues}
    onSubmit={handleSubmit}>
      {({handleSubmit}) => <AddTrainingForm onSubmit={handleSubmit}/>}
    </Formik>
  );

};

export default AddTrainingInput;