import React, {createContext, useContext} from 'react';

import {AlertContextType} from '../../types/AlertContext';
import {DefaultProviderPropsType} from '../../types/DefaultProvider';
import Components from '../../Components';
import {useAlertStatus} from '../../Hook/useAlertStatus';

const AlertContext = createContext<AlertContextType | null>(null);

export const useAlert = () => useContext(AlertContext);

export const AlertProvider: React.FC<DefaultProviderPropsType> = props => {
  const {status, onToggle} = useAlertStatus();

  return (
    <AlertContext.Provider value={{onOpen: onToggle}}>
      {props.children}
      <Components.Alert visible={status} onClose={onToggle} />
    </AlertContext.Provider>
  );
};
