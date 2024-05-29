import {StyleSheet} from 'react-native';

import {ButtonStyleType} from '../../types/Button';
import {Dimension} from '../../Constant/Dimension';
import {Color} from '../../Constant/Color';
import {Font} from '../../Constant/Font';

export const styles: ButtonStyleType = StyleSheet.create<ButtonStyleType>({
  container: {
    padding: Dimension.width / 30,
    backgroundColor: Color.black,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: Color.white,
    fontFamily: `${Font}Medium`,
    fontSize: Dimension.width / 24,
  },
  loading: {
    alignSelf: 'center',
  },
});
