import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'kh',
  resources: {
    en: {
      translation: require('./en.json'),
    },
    kh: {
      translation: require('./kh.json'),
    },
  },
});

export default i18next;
