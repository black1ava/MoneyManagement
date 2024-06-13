import {StyleSheet} from 'react-native';

import {CustomBottomSheetStyleType} from '../../types/CustomBottomSheet';
import {Dimension} from '../../Constant/Dimension';

export const styles: CustomBottomSheetStyleType =
  StyleSheet.create<CustomBottomSheetStyleType>({
    blurView: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: Dimension.width,
      height: Dimension.height,
    },
  });
