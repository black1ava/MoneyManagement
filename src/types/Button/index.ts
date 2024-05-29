import {TextStyle, ViewStyle} from 'react-native';

export type ButtonStyleType = {
  container: ViewStyle;
  buttonText: TextStyle;
  loading: ViewStyle;
};

export type ButtonPropsType = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  loading?: boolean;
};
