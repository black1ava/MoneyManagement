import {StyleSheet} from 'react-native';

import {OtpStyleType} from '../../types/Otp';
import {Font} from '../../Constant/Font';
import {Dimension} from '../../Constant/Dimension';

export const styles: OtpStyleType = StyleSheet.create<OtpStyleType>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Dimension.width / 24,
    flex: 1,
    gap: Dimension.width / 24,
  },
  text: {
    fontFamily: `${Font}Regular`,
    fontSize: Dimension.width / 24,
    textAlign: 'center',
    lineHeight: Dimension.width / 15,
  },
  phone: {
    fontFamily: `${Font}Medium`,
  },
});
