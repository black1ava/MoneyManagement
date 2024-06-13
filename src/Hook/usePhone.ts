import {useState} from 'react';

import {PhoneHookReturnType} from '../types/PhoneHookReturnType';

export const usePhone: () => PhoneHookReturnType = () => {
  const [phone, setPhone] = useState<string>('');

  return {phone, setPhone};
};
