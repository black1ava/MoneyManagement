import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {LanguageItemPropsType} from '../../types/LanguageItem';
import {styles} from './styles';
import Flag from '../Flag';
import {Dimension} from '../../Constant/Dimension';
import {useLanguage} from '../../Context/Language';

const LanguageItem: React.FC<LanguageItemPropsType> = props => {
  const language = useLanguage();

  const active: boolean = language?.language === props.data.code;

  const handlePress = () => {
    language?.setLanguage(props.data.code);
    language?.onClose();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={handlePress}>
      <Flag name={props.data.icon} width={Dimension.width / 12} />
      <Text style={styles.label}>{props.data.label}</Text>
      <Fontisto
        name={`radio-btn-${active ? 'active' : 'passive'}`}
        size={Dimension.width / 24}
      />
    </TouchableOpacity>
  );
};

export default React.memo(LanguageItem);
