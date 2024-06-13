import {useState} from 'react';

import {AlertBackdropReturnType} from '../../types/AlertBackdropHookReturnType';

export const useAlertBackdrop: () => AlertBackdropReturnType = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleVisibleToggle = () => setVisible(prevState => !prevState);

  return {
    visible,
    onVisibleToggle: handleVisibleToggle,
    onSetVisible: setVisible,
  };
};
