import React from 'react';
import {FlatList, ListRenderItem, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import Container from '../Container';
import {styles} from './styles';
import {LANGUAGE_DATA} from '../../Data/Language';
import {LanguageDataType} from '../../types/Language';
import LanguageItem from '../LanguageItem';

const LanguageContent: React.FC = () => {
  const {t} = useTranslation();

  const renderItem: ListRenderItem<LanguageDataType> = ({item}) => (
    <LanguageItem data={item} />
  );

  return (
    <Container>
      <Text style={styles.title}>{t('Choose your language')}</Text>
      <FlatList
        data={LANGUAGE_DATA}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </Container>
  );
};

export default React.memo(LanguageContent);
