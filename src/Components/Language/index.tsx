import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Flag from '../Flag';
import {Dimension} from '../../Constant/Dimension';
import {styles} from './styles';
import {useLanguage} from '../../Context/Language';

const ICON_SIZE: number = Dimension.width / 15;

const Language: React.FC = () => {
  const language = useLanguage();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={language?.onOpen}>
      <Flag name="Kh" width={ICON_SIZE} />
      <AntDesign name="caretdown" size={Dimension.width / 40} />
    </TouchableOpacity>
  );
};

export default React.memo(Language);
