import React, {createContext, useContext, useState} from 'react';

import {AlertContextType} from '../../types/AlertContext';
import {DefaultProviderPropsType} from '../../types/DefaultProvider';
import Components from '../../Components';
import {useAlertStatus} from '../../Hook/useAlertStatus';
import {AlertDataType} from '../../types/Alert';
import {useAlertData} from '../../Hook/useAlertData';

const AlertContext = createContext<AlertContextType | null>(null);

export const useAlert = () => useContext(AlertContext);

export const AlertProvider: React.FC<DefaultProviderPropsType> = props => {
  const {status, onToggle} = useAlertStatus();
  const {alertData, onSetAlertData} = useAlertData();

  const handleOpenAlert: (data: AlertDataType) => void = data => {
    onSetAlertData(data);
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
