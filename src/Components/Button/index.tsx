import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {ButtonPropsType} from '../../types/Button';
import {Color} from '../../Constant/Color';

const Button: React.FC<ButtonPropsType> = props =>
  props.loading ? (
    <ActivityIndicator style={styles.loading} color={Color.black} />
  ) : (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      activeOpacity={0.8}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );

export default React.memo(Button);
