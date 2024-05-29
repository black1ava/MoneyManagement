import React from 'react';
import {TextInput, View, Text, TextInputProps} from 'react-native';

import {styles} from './styles';
import Svg from '../../assets/Svg';
import {Dimension} from '../../Constant/Dimension';
import Flag from '../Flag';

const ICON_SIZE: number = Dimension.width / 15;

const PhoneInput: React.FC<TextInputProps> = props => {
  return (
    <View style={styles.container}>
      <Flag name="Kh" width={ICON_SIZE} />
      <Text style={styles.code}>+855</Text>
      <TextInput
        {...props}
        style={[styles.input, props.style]}
        keyboardType="phone-pad"
      />
    </View>
  );
};

export default React.memo(PhoneInput);
