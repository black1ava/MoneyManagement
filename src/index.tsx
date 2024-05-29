import React from 'react';

import Navigation from './Navigation';
import {LanguageProvider} from './Context/Language';

const AppContainer: React.FC = () => (
  <LanguageProvider>
    <Navigation />
  </LanguageProvider>
);

export default React.memo(AppContainer);
