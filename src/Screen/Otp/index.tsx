import React from 'react';

import Otp from './Otp';
import {OtpProvider} from '../../Context/OtpContext';

const OtpScreen: React.FC = () => {
  return (
    <OtpProvider>
      <Otp />
    </OtpProvider>
  );
};

export default React.memo(OtpScreen);
