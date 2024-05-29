import {StyleSheet} from 'react-native';

import {LoginStyleType} from '../../types/Login';
import {Dimension} from '../../Constant/Dimension';

export const styles: LoginStyleType = StyleSheet.create<LoginStyleType>({
  container: {
    padding: Dimension.width / 24,
    justifyContent: 'center',
    flex: 1,
    gap: Dimension.width / 24,
  },
});
