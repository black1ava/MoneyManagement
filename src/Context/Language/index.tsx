import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {useTranslation} from 'react-i18next';

import {CustomBottomSheetMethodType} from '../../types/CustomBottomSheet';
import {DefaultProviderPropsType} from '../../types/DefaultProvider';
import Components from '../../Components';
import CustomBottomSheet from '../../Components/CustomBottomSheet';
import {LanguageContextType} from '../../types/LanguageContext';
import {LanguageCodeType} from '../../types/Language';

const LanguageContext = createContext<
  (CustomBottomSheetMethodType & LanguageContextType) | null
>(null);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<DefaultProviderPropsType> = props => {
  const customBottomSheetRef = useRef<CustomBottomSheet>(null);
  const {i18n} = useTranslation();

  const [language, setLanguage] = useState<LanguageCodeType>('kh');

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        onClose: () => customBottomSheetRef.current?.onClose(),
        onOpen: () => customBottomSheetRef.current?.onOpen(),
        language,
        setLanguage,
      }}>
      {props.children}
      <Components.CustomBottomSheet
        snapPoints={['50%']}
        ref={customBottomSheetRef}>
        <Components.LanguageContent />
      </Components.CustomBottomSheet>
    </LanguageContext.Provider>
  );
};
