import React, {useRef} from 'react';
import {View, FlatList, ListRenderItem, TextInput} from 'react-native';

import ConfirmationFieldItem from '../ConfirmationFieldItem';
import {styles} from './styels';
import {useOtp} from '../../Context/OtpContext';

const ConfirmationField: React.FC = () => {
  const otp = useOtp();

  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => inputRef.current?.focus();

  const renderItem: ListRenderItem<string> = ({item}) => (
    <ConfirmationFieldItem onPress={handleFocus} data={item} />
  );

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={otp?.code.value}
        onChangeText={otp?.onCodeChange}
      />
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={otp?.code.asArr}
        renderItem={renderItem}
        horizontal
        scrollEnabled={false}
      />
    </View>
  );
};
export default React.memo(ConfirmationField);
