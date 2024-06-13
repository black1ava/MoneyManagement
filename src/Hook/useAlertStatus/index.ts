import {useState} from 'react';

import {AlertStatusHookReturnType} from '../../types/AlertStatusHookReturnType';

export const useAlertStatus: () => AlertStatusHookReturnType = () => {
  const [status, setStatus] = useState<boolean>(false);

  const handleToggle = () => setStatus(prevState => !prevState);

  return {
    status,
    onToggle: handleToggle,
  };
};
