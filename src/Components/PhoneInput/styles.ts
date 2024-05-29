import {StyleSheet} from 'react-native';

import {PhoneInputStyleType} from '../../types/PhoneInput';
import {Dimension} from '../../Constant/Dimension';
import {Font} from '../../Constant/Font';
import {Color} from '../../Constant/Color';

export const styles: PhoneInputStyleType =
  StyleSheet.create<PhoneInputStyleType>({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Dimension.width / 24,
      padding: Dimension.width / 45,
      borderWidth: 1,
      borderColor: Color.grey,
      borderRadius: 8,
    },
    code: {
      fontFamily: `${Font}Regular`,
      fontSize: Dimension.width / 24,
    },
    input: {
      flex: 1,
      fontFamily: `${Font}Regular`,
      fontSize: Dimension.width / 24,
      padding: 0,
    },
  });
