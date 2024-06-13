import {StyleSheet} from 'react-native';

import {AlertActionStyleType} from '../../types/AlertAction';
import {Dimension} from '../../Constant/Dimension';
import {Font} from '../../Constant/Font';
import {Color} from '../../Constant/Color';

export const styles: AlertActionStyleType =
  StyleSheet.create<AlertActionStyleType>({
    container: {
      padding: Dimension.width / 30,
      alignItems: 'center',
      backgroundColor: Color.black,
      borderRadius: 8,
    },
    title: {
      fontSize: Dimension.width / 24,
      fontFamily: `${Font}Medium`,
      color: Color.white,
    },
  });
