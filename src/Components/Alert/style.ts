import {StyleSheet} from 'react-native';

import {AlertStyleType} from '../../types/Alert';
import {Color} from '../../Constant/Color';
import {Dimension} from '../../Constant/Dimension';

export const styles: AlertStyleType = StyleSheet.create<AlertStyleType>({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimension.width,
    height: Dimension.height,
  },
  modalContainer: {
    width: Dimension.width * 0.9,
    padding: Dimension.width / 24,
    backgroundColor: Color.white,
  },
});
