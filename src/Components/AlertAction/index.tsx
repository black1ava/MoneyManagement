import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';
import {AlertActionPropsType} from '../../types/AlertAction';

const AlertAction: React.FC<AlertActionPropsType> = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={props.data.onPress}>
      <Text style={styles.title}>{props.data.title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(AlertAction);
