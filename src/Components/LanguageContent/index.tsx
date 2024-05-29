import React from 'react';
import {Text} from 'react-native';

import Container from '../Container';

const LanguageContent: React.FC = () => {
  return (
    <Container>
      <Text>Language Content</Text>
    </Container>
  );
};

export default React.memo(LanguageContent);
