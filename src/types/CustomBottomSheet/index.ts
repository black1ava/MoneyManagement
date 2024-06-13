import {ViewStyle} from 'react-native';

export type CustomBottomSheetMethodType = {
  onClose: () => void;
  onOpen: () => void;
};

export type CustomBottomSheetStyleType = {
  blurView: ViewStyle;
};
