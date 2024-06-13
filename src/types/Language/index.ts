import {ViewStyle} from 'react-native';

export type LanguagePropsType = {
  container: ViewStyle;
};

export type LanguageCodeType = 'kh' | 'en';

export type LanguageDataType = {
  icon: 'Kh' | 'En';
  label: 'ភាសាខ្មែរ' | 'English';
  code: LanguageCodeType;
};
