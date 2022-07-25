import React from 'react';
import { Text as NativeText } from 'react-native';
import { defaultStyles } from '../styles';

const TextTitle = ({ style, ...props }) => {
  const textStyle = [
    defaultStyles.fontTitle,
    style
  ];
  return (
    <NativeText style={textStyle} {...props} />
  );
};

export default TextTitle;