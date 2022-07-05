import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {foundation} from 'styles/colors';

interface SvgProp {
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
}

const SvgComponent: React.FC<SvgProp> = ({
  fill = foundation.yellow,
  stroke = foundation.yellow,
  width = 24,
  height = 25,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        d="M12.464 3.425l2.924 5.924 6.54.956-4.732 4.609 1.116 6.51-5.848-3.075-5.849 3.076 1.117-6.511L3 10.305l6.54-.956 2.924-5.924z"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgComponent;
