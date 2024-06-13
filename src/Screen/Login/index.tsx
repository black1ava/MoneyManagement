import React from 'react';

import Login from './Login';
import {LoginProvider} from '../../Context/Login';

const LoginScreen: React.FC = () => (
  <LoginProvider>
    <Login />
  </LoginProvider>
);

export default React.memo(LoginScreen);
