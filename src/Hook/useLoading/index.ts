import {useState} from 'react';
import {LoadingHookReturnType} from '../../types/LoadingHookReturnType';

export const useLoading: () => LoadingHookReturnType = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadingToggle = () => setLoading(prevState => !prevState);

  return {
    loading,
    onLoadingToggle: handleLoadingToggle,
    setLoading,
  };
};
