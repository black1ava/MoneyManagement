import React, {createContext, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {LoginContextType} from '../../types/LoginContext';
import {DefaultProviderPropsType} from '../../types/DefaultProvider';
import {loginWithPhone} from '../../Services/loginWithPhone';
import {usePhone} from '../../Hook/usePhone';
import {useAlert} from '../Alert';
import {validatePhoneNumber} from '../../Utilities/ValidatePhoneNumber';
import {phoneFormatted} from '../../Utilities/PhoneFormatted';
import {AuthNavigationType} from '../../types/AuthNavigation';

const LoginContext = createContext<LoginContextType | null>(null);

export const useLogin = () => useContext(LoginContext);

export const LoginProvider: React.FC<DefaultProviderPropsType> = props => {
  const {phone, setPhone} = usePhone();
  const Alert = useAlert();
  const {t} = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthNavigationType>>();

  const handleLoginWithPhoneNumber: () => Promise<void> = async () => {
    try {
      const formattedPhone = phoneFormatted(phone);
      const validPhoneNumber = validatePhoneNumber(formattedPhone);

      if (phone === '' || !validPhoneNumber) {
        Alert?.alert({
          title: t('Invalid phone number'),
          description: t('Please check your phone number again'),
        });
        return;
      }

      const {verificationId} = await loginWithPhone(formattedPhone);
      navigation.replace('Otp', {verificationId, phone: formattedPhone});
    } catch (error) {
      throw error;
    }
  };

  return (
    <LoginContext.Provider
      value={{
        phone,
        setPhone,
        onLoginWithPhoneNumber: handleLoginWithPhoneNumber,
      }}>
      {props.children}
    </LoginContext.Provider>
  );
};
