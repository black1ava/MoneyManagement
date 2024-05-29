import {Dimensions} from 'react-native';

type DimensionType = {
  width: number;
  height: number;
};

export const Dimension: DimensionType = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
