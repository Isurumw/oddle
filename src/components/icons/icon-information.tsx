import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {primary} from 'styles/colors';

interface SvgProp {
  fill?: string;
  width?: number;
  height?: number;
}

const SvgComponent: React.FC<SvgProp> = ({
  fill = primary.darkGreen,
  width = 24,
  height = 25,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.925a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm-8.5 6.5a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11.425a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zM11 9.425a1 1 0 011-1h.006a1 1 0 110 2H12a1 1 0 01-1-1z"
        fill={fill}
      />
    </Svg>
  );
};

export default SvgComponent;
