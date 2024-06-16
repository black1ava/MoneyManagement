import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import Components from '../../Components';
import {styles} from './styles';
import {AuthNavigationType} from '../../types/AuthNavigation';

const Otp: React.FC = () => {
  const route = useRoute<RouteProp<AuthNavigationType, 'Otp'>>();
  const {t} = useTranslation();

  return (
    <Components.Container style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>
          {t('We have sent verification code to')}{' '}
          <Text style={styles.phone}>{route.params.phone}</Text>
        </Text>
        <Components.ConfirmationField />
        <Components.KeyboardSpacing />
      </ScrollView>
    </Components.Container>
  );
};

export default React.memo(Otp);
