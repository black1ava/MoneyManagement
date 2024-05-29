import React from 'react';

import {FlagPropsType} from '../../types/Flag';
import Svg from '../../assets/Svg';

const ORIGNIAL_WIDTH: number = 80;
const ORIGINAL_HEIGHT: number = 60;

const Flag: React.FC<FlagPropsType> = props => {
  const Icon = Svg[props.name as keyof typeof Svg];

  return (
    <Icon
      width={props.width}
      height={(props.width * ORIGINAL_HEIGHT) / ORIGNIAL_WIDTH}
    />
  );
};

export default React.memo(Flag);
