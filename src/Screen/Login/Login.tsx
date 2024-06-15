import React from 'react';
import {ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

import Components from '../../Components';
import {styles} from './styles';
import {useAlert} from '../../Context/Alert';
import {useLogin} from '../../Context/Login';

const Login: React.FC = () => {
  const {t} = useTranslation();
  const login = useLogin();

  return (
    <Components.Container>
      <ScrollView contentContainerStyle={styles.container}>
        <Components.PhoneInput
          placeholder={t('Please input your phone number')}
          value={login?.phone}
          onChangeText={login?.setPhone}
        />
        <Components.Button
          title={t('Login with phone number')}
          onPress={login?.onLoginWithPhoneNumber}
        />
        <Components.KeyboardSpacing />
      </ScrollView>
    </Components.Container>
  );
};

export default React.memo(Login);
