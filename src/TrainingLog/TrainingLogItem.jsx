import React from "react";
import TextTitle from '../Components/TextTitle';
import { View, Text, StyleSheet, Image } from "react-native";
import { defaultStyles } from "../styles";
import { theme } from "../theme";

/**
 * 
 * date: string
 * name: string
 * //sets = len of reps/weight
 * exercises: [{name: string, reps: [number], sets: number, weight:[number], comments:string}]
 * tags: [string]
 * id: id} param0 
 * 
 */

const styles = StyleSheet.create({
  uneven: {
    padding: 5,
  },
  even: {
    padding: 5,
    backgroundColor: theme.backgroundColors.secondary,
  },
  image: {
    height: 50,
    width: 55,
  },
  comment: {
    marginVertical: 10,
    width: '50%',
    borderRadius: 25,
    alignSelf: 'center',
    textAlign: 'center',
    color: theme.colors.primaryWhite,
    backgroundColor: theme.colors.primaryBlack,
  },
  subheading: defaultStyles.fontSubheading,
  subtitle: {...defaultStyles.fontSubtitle, alignSelf:'center'}
});

const TrainingLogItem = ({item}) => {

  const showExcercises = (sets, reps, weight) => {
    const toShow = [];
    for (let i = 0; i < sets; i++) {
      toShow.push(
        <View key={i}>
          <Text>performed {reps[i]} reps with {weight[i]}kg</Text>
        </View>
        );
    }
    return toShow;
  };

  return(
    <View>
      <TextTitle style={{textAlign:'center',marginTop:10}}>
        {item.name} </TextTitle>
      <Image source={require('../../assets/addExercise.png')} style={styles.image}></Image>
      <Text style={styles.subheading}>{item.date}</Text>
      <Text style={styles.subheading}>Training Tagged as: {String(item.tags)}</Text>
      {item.exercises.map((exc,i) => {
        return (
        <View key={exc.name} style={i%2 ? styles.uneven : styles.even}>
          <Text style={styles.subtitle}>{exc.name}: {exc.sets} sets for:</Text>
          <View style={{paddingLeft:10}}> 
            {showExcercises(exc.sets, exc.reps, exc.weight)}
            <Text style={i%2 ? {...styles.comment,
              color:theme.colors.primaryWhite} : 
              {...styles.comment, color:theme.backgroundColors.secondary}}>{exc.comments}</Text>
          </View>
        </View>
        );
      })}
    </View>
  );
};  

export default TrainingLogItem;
