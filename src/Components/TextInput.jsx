import React from "react";
import { View,Text, StyleSheet, TextInput as NativeTextInput } from "react-native";
import { useField } from "formik";
import { theme } from "../theme";
import { defaultStyles } from "../styles";

const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.errorPrimary,
  },
  onError: {
    borderColor: theme.colors.errorPrimary ,
  }
});

const TextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const error = meta.touched && meta.error;
  const inputStyle = [ defaultStyles.defaultTextInput,
    error && styles.onError,
    style
  ];

  return(
    <View>
      <NativeTextInput
        style={inputStyle}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={error}
        {...props}
      />
    {error && <Text style={styles.errorText}> {meta.error} </Text>}
    </View>
  );
};

export default TextInput;