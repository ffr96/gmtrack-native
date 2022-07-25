import React from "react";
import { FlatList, Text, View } from "react-native";
import { useStateValue } from "../state/state";
import { theme } from "../theme";
import TrainingLogItem from './TrainingLogItem';


const TrainingLogSeparator = () => {
  return (
    <View style={{backgroundColor:theme.backgroundColors.primary, height: 20, width:'100%'}}>
      <Text style={{alignSelf:'center', fontStyle:'italic'}}>Gm Track</Text>
    </View>
  );
};

const TrainingLogContainer = ({trainingLog}) => {
  console.log(trainingLog);
  return (
    <FlatList
      style={{maxHeight:'90%'}}
      data={trainingLog}
      renderItem={TrainingLogItem}
      ItemSeparatorComponent={TrainingLogSeparator}
    />
  );
};

const TrainingLog = () => {
  const [ {user, trainingLog} ] = useStateValue();
  
  if (!user) {
    return null;
  }

  

  return (
    <TrainingLogContainer trainingLog={trainingLog}/>
  );
};

export default TrainingLog;