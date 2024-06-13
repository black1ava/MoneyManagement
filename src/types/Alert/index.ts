import {TextStyle, ViewStyle} from 'react-native';

export type AlertStyleType = {
  container: ViewStyle;
  backdrop: ViewStyle;
  modalContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
};

export type AlertPropsType = {
  onClose?: () => void;
  isVisible?: boolean;
  data?: AlertDataType;
};

export type AlertDataType = {
  title?: string;
  description?: string;
  actions?: Array<AlertActionType>;
};

export type AlertActionType = {
  title?: string;
  onPress?: () => void;
  variant: AlertActionVariantType;
};

export type AlertActionVariantType = 'primary' | 'danger' | 'secondary';
