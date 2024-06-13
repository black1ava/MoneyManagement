import {TextStyle, ViewStyle} from 'react-native';
import {AlertActionType} from '../Alert';

export type AlertActionStyleType = {
  container: ViewStyle;
  title: TextStyle;
};

export type AlertActionPropsType = {
  data: AlertActionType;
};
