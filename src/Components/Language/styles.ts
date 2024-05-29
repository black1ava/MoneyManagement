import {StyleSheet} from 'react-native';

import {LanguagePropsType} from '../../types/Language/indext';
import {Dimension} from '../../Constant/Dimension';

export const styles: LanguagePropsType = StyleSheet.create<LanguagePropsType>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Dimension.width / 70,
  },
});
