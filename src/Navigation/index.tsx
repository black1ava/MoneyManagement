import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';

const Navigation: React.FC = () => (
  <NavigationContainer>
    <AuthNavigation />
  </NavigationContainer>
);

export default React.memo(Navigation);
