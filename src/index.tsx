import React from 'react';

import Navigation from './Navigation';
import {LanguageProvider} from './Context/Language';
import {AlertProvider} from './Context/Alert';

const AppContainer: React.FC = () => (
  <AlertProvider>
    <LanguageProvider>
      <Navigation />
    </LanguageProvider>
  </AlertProvider>
);

export default React.memo(AppContainer);
