import auth from '@react-native-firebase/auth';

import {phoneFormatted} from '../../Utilities/PhoneFormatted';

export const loginWithPhone: (phone: string) => void = phone => {
  const phoneNumber = phoneFormatted(phone);

  console.log(phoneNumber);
};
