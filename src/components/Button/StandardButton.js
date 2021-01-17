import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './style';

const StandardButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonStyles} {...props}/>
    
    </View>
  );
};

export default StandardButton;
