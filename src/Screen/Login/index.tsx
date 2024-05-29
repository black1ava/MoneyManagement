import React from 'react';
import {ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

import Components from '../../Components';
import {styles} from './styles';

const Login: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Components.Container>
      <ScrollView contentContainerStyle={styles.container}>
        <Components.PhoneInput
          placeholder={t('Please input your phone number')}
        />
        <Components.Button title={t('Login with phone number')} />
      </ScrollView>
    </Components.Container>
  );
};

export default React.memo(Login);
