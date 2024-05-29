import React, {createContext, useContext, useRef} from 'react';

import {CustomBottomSheetMethodType} from '../../types/CustomBottomSheet';
import {DefaultProviderPropsType} from '../../types/DefaultProvider';
import Components from '../../Components';
import {Text} from 'react-native';
import CustomBottomSheet from '../../Components/CustomBottomSheet';

const LanguageContext = createContext<CustomBottomSheetMethodType | null>(null);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<DefaultProviderPropsType> = props => {
  const customBottomSheetRef = useRef<CustomBottomSheet>(null);

  return (
    <LanguageContext.Provider
      value={{
        onClose: () => customBottomSheetRef.current?.onClose(),
        onOpen: () => customBottomSheetRef.current?.onOpen(),
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
