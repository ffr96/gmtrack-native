import React from "react";
import { View, StyleSheet } from "react-native";

import AddTrainingInput from './AddTrainingInput';
import TextTitle from "../Components/TextTitle";
import { useStateValue } from "../state/state";

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },
  text: {
    marginVertical: 50,
  }
});

const AddTraining = () => {
  const [ {user} , dispatch ] = useStateValue();
  return (
    <View style={styles.container}>
      <TextTitle style={styles.text}> Add new training to log </TextTitle>
      <AddTrainingInput user={user} dispatch={dispatch}/>
    </View>
  );
};

export default AddTraining;