import React from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';

import ConfirmationFieldItem from '../ConfirmationFieldItem';
import {styles} from './styels';

const ConfirmationField: React.FC = () => {
  const renderItem: ListRenderItem<string> = () => <ConfirmationFieldItem />;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={Array(6).fill('')}
        renderItem={renderItem}
        horizontal
        scrollEnabled={false}
      />
    </View>
  );
};
export default React.memo(ConfirmationField);
