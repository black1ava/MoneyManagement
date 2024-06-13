import {ViewStyle} from 'react-native';

export type AlertStyleType = {
  container: ViewStyle;
  backdrop: ViewStyle;
  modalContainer: ViewStyle;
};

export type AlertPropsType = {
  onClose?: () => void;
  isVisible?: boolean;
};
