import React, { useRef, useState } from "react";
import { useField } from "formik";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { theme } from "../theme";

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.primaryBlack,
    borderWidth: 1,
    marginHorizontal: 5
  },
  picker : {
    height: 25,
    maxHeight: 50
  },
  picked: {
    color: theme.backgroundColors.secondary
  }
});

const picked = (value, selected) => {
  let included = false;
  selected.forEach(s => {
    if (s.includes(value)) {
      included = true;
    }
  });

  return included;
};

const SelectInput = ({ items, ...props}) => {
  const pickerRef = useRef();
  const [ field, meta, helpers ] = useField(props);
  const [ selected, setSelected ] = useState([]);

  //console.log(pickerRef?.current?.props?.selectedValue);
  //console.log(pickerRef);
  //if (pickerRef?.current?.props?.selectedValue !== 'Select training') {
  //  pickerRef.current.props.selectedValue = 'Select training';
  //}

  pickerRef?.current?.focus();

  return (
    <View style={styles.container}>
      <Picker
        ref={pickerRef}
        style={styles.picker}
        selectedValue={field.value}
        onValueChange={(itemValue) => {
          helpers.setValue('Select training');
          if (selected.includes(itemValue)) {
            setSelected(selected.filter(val => val !== itemValue));
          } else {
            setSelected(selected.concat(itemValue));
          }
        }
        }>
        <Picker.Item color={'grey'} label='Select training' enabled={false}/>
        {
          items.map(it => {
            return (
            <Picker.Item label={it.label} 
            value={it.value} key={it.value}
            color={picked(it.value,selected) ? theme.backgroundColors.secondary : null}
            />
            );
          })  
        }
      </Picker>
      <Text>selected: {String(selected)} </Text>
      {
        meta.touched && meta.error ? <Text>{meta.error}</Text> :
        null
      }
    </View>
  );
};

export default SelectInput;