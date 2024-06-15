import {StyleSheet} from 'react-native';

import {ConfirmationFieldStyleType} from '../../types/ConfirmationField';
import {Dimension} from '../../Constant/Dimension';

export const styles: ConfirmationFieldStyleType =
  StyleSheet.create<ConfirmationFieldStyleType>({
    container: {
      flexDirection: 'row',
    },
    contentContainer: {
      gap: Dimension.width / 24,
      alignSelf: 'center',
    },
    list: {
      flexDirection: 'column',
    },
  });
