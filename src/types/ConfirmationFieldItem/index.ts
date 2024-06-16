import {ViewStyle} from 'react-native';

export type ConfirmationItemFieldStyleType = {
  container: ViewStyle;
};

export type ConfirmationItemFieldPropsType = {
  onPress: () => void;
  data: string;
};
