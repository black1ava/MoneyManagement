import React, {createContext, useContext} from 'react';

import {LoginContextType} from '../../types/LoginContext';
import {DefaultProviderPropsType} from '../../types/DefaultProvider';
import {loginWithPhone} from '../../Services/loginWithPhone';
import {usePhone} from '../../Hook/usePhone';
import {useAlert} from '../Alert';

const LoginContext = createContext<LoginContextType | null>(null);

export const useLogin = () => useContext(LoginContext);

export const LoginProvider: React.FC<DefaultProviderPropsType> = props => {
  const {phone, setPhone} = usePhone();
  const alert = useAlert();

  const handleLoginWithPhoneNumber: () => Promise<void> = async () => {
    if (phone === '') {
      alert?.onOpen();
    }

    loginWithPhone(phone);
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
