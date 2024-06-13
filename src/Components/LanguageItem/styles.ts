import {StyleSheet} from 'react-native';

import {LanguageItemStyleType} from '../../types/LanguageItem';
import {Dimension} from '../../Constant/Dimension';
import {Font} from '../../Constant/Font';
import {Color} from '../../Constant/Color';

export const styles: LanguageItemStyleType =
  StyleSheet.create<LanguageItemStyleType>({
    label: {
      fontSize: Dimension.width / 20,
      fontFamily: `${Font}Regular`,
      flex: 1,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Dimension.width / 24,
      padding: Dimension.width / 24,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: Color.grey,
    },
  });
