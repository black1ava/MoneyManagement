import React from 'react';
import {ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

import Components from '../../Components';
import {styles} from './styles';
import {useLogin} from '../../Context/Login';
import {useLoading} from '../../Hook/useLoading';

const Login: React.FC = () => {
  const {t} = useTranslation();
  const login = useLogin();
  const phoneLoginLoading = useLoading();

  const handleLoginWithPhonePress: () => Promise<void> = async () => {
    phoneLoginLoading.onLoadingToggle();

    try {
      await login?.onLoginWithPhoneNumber();
    } catch (error) {
      console.error('error', error);
    } finally {
      phoneLoginLoading.onLoadingToggle();
    }
  };

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
          onPress={handleLoginWithPhonePress}
          loading={phoneLoginLoading.loading}
        />
        <Components.KeyboardSpacing />
      </ScrollView>
    </Components.Container>
  );
};

export default React.memo(Login);
