import {LanguageCodeType} from '../Language';

export type LanguageContextType = {
  language: LanguageCodeType;
  setLanguage: (value: LanguageCodeType) => void;
};
