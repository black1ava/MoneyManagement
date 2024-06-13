import {StyleSheet} from 'react-native';

import {LanguageContentStyleType} from '../../types/LanguageContent';
import {Dimension} from '../../Constant/Dimension';
import {Font} from '../../Constant/Font';

export const styles: LanguageContentStyleType =
  StyleSheet.create<LanguageContentStyleType>({
    title: {
      fontSize: Dimension.width / 20,
      fontFamily: `${Font}Medium`,
      alignSelf: 'center',
    },
    contianer: {
      paddingHorizontal: Dimension.width / 24,
    },
    contentContainer: {
      padding: Dimension.width / 24,
      gap: Dimension.width / 24,
    },
  });
