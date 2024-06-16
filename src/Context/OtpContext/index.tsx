import React, {createContext, useContext, useState} from 'react';

import {OtpContextType} from '../../types/OtpContext';
import {DefaultProviderPropsType} from '../../types/DefaultProvider';
import {CodeType} from '../../types/OtpContext';

const OtpContext = createContext<OtpContextType | null>(null);

export const useOtp = () => useContext(OtpContext);

export const OtpProvider: React.FC<DefaultProviderPropsType> = props => {
  const [code, setCode] = useState<CodeType>({
    value: '',
    asArr: Array(6).fill(''),
  });

  const handleCodeChange: (value: string) => void = value => {
    setCode({
      value,
      asArr: [...value.split(''), ...Array(6 - value.length).fill('')],
    });
  };

  console.log(code);

  return (
    <OtpContext.Provider value={{code, onCodeChange: handleCodeChange}}>
      {props.children}
    </OtpContext.Provider>
  );
};
