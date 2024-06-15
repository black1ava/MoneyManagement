import {StyleSheet} from 'react-native';

import {ConfirmationItemFieldStyleType} from '../../types/ConfirmationFieldItem';
import {Dimension} from '../../Constant/Dimension';
import {Color} from '../../Constant/Color';

export const styles: ConfirmationItemFieldStyleType =
  StyleSheet.create<ConfirmationItemFieldStyleType>({
    container: {
      width: Dimension.width / 10,
      height: Dimension.width / 10,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: Color.grey,
    },
  });
