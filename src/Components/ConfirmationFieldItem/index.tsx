import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {ConfirmationItemFieldPropsType} from '../../types/ConfirmationFieldItem';

const ConfirmationFieldItem: React.FC<
  ConfirmationItemFieldPropsType
> = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      activeOpacity={0.8}>
      <Text>{props.data}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ConfirmationFieldItem);
