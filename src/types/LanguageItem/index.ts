import {TextStyle, ViewStyle} from 'react-native';

import {LanguageDataType} from '../Language';

export type LanguageItemPropsType = {
  data: LanguageDataType;
};

export type LanguageItemStyleType = {
  label: TextStyle;
  container: ViewStyle;
};
