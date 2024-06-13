import {StyleSheet} from 'react-native';

import {AlertStyleType} from '../../types/Alert';
import {Color} from '../../Constant/Color';
import {Dimension} from '../../Constant/Dimension';
import {Font} from '../../Constant/Font';

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
    borderRadius: 8,
    gap: Dimension.width / 60,
  },
  title: {
    fontSize: Dimension.width / 20,
    color: Color.black,
    fontFamily: `${Font}Medium`,
    alignSelf: 'center',
  },
  description: {
    fontSize: Dimension.width / 24,
    color: Color.black,
    fontFamily: `${Font}Regular`,
    alignSelf: 'center',
  },
});
