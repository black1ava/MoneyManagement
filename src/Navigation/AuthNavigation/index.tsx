import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

import {AuthNavigationType} from '../../types/AuthNavigation';
import {LoginScreen, OtpScreen} from '../../Screen';
import {Font} from '../../Constant/Font';
import Components from '../../Components';

const Stack = createNativeStackNavigator<AuthNavigationType>();

const AuthNavigation: React.FC = () => {
  const {t} = useTranslation();

  const renderLanguage: () => React.ReactElement = () => (
    <Components.Language />
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: `${Font}Medium`,
        },
        headerRight: renderLanguage,
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: t('Login')}}
      />
      <Stack.Screen name="Otp" component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default React.memo(AuthNavigation);
