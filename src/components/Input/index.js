import React from 'react';
import {TextInput, View} from 'react-native';
import {Styles} from './style';

const Input = (props) => {
  const {style} = props;
  return (
    <TextInput
      style={style ? style : Styles.inputStyles}
      {...props}
      placeholderTextColor="black"
    
    />
  );
};

export default Input;
