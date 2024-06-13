import {useState} from 'react';

import {AlertDataHookReturnType} from '../../types/AlertDataHookReturnType';
import {AlertDataType} from '../../types/Alert';

export const useAlertData: () => AlertDataHookReturnType = () => {
  const [alertData, setAlertData] = useState<AlertDataType>({});

  return {
    alertData,
    onSetAlertData: setAlertData,
  };
};
