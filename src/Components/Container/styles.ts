import {StyleSheet} from 'react-native';

import {ContainerStyleType} from '../../types/Container';
import {Color} from '../../Constant/Color';

export const styles: ContainerStyleType = StyleSheet.create<ContainerStyleType>(
  {
    container: {
      flex: 1,
      backgroundColor: Color.white,
    },
  },
);
