import React, {createContext, useContext, useState} from 'react';

import {AlertContextType} from '../../types/AlertContext';
import {DefaultProviderPropsType} from '../../types/DefaultProvider';
import Components from '../../Components';
import {useAlertStatus} from '../../Hook/useAlertStatus';
import {AlertDataType} from '../../types/Alert';

const AlertContext = createContext<AlertContextType | null>(null);

export const useAlert = () => useContext(AlertContext);

export const AlertProvider: React.FC<DefaultProviderPropsType> = props => {
  const {status, onToggle} = useAlertStatus();
  const [alertData, setAlertData] = useState<AlertDataType>({});

  const handleOpenAlert: (data: AlertDataType) => void = data => {
    setAlertData(data);
    onToggle();
  };

  return (
    <AlertContext.Provider value={{alert: handleOpenAlert}}>
      {props.children}
      <Components.Alert
        isVisible={status}
        onClose={onToggle}
        data={alertData}
      />
    </AlertContext.Provider>
  );
};
