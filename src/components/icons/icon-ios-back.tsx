import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {primary} from 'styles/colors';

interface SvgProp {
  fill?: string;
  width?: number;
  height?: number;
}

const SvgComponent: React.FC<SvgProp> = ({
  fill = primary.systemBlue,
  width = 10,
  height = 17,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 17" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.14444 16.1939C8.70826 16.5336 8.08811 16.4961 7.68873 16.0985L0.766583 9.20717C0.326469 8.76902 0.331182 8.07926 0.760466 7.64997L0.749265 7.66325L0.752524 7.65999L0.847439 7.57518C0.878195 7.55123 0.909866 7.52915 0.94231 7.50894L7.70781 0.74102C8.13063 0.317895 8.81611 0.320106 9.24042 0.744418L9.33142 0.847331C9.66502 1.27529 9.63403 1.88765 9.24438 2.27759L3.08202 8.44554L9.2253 14.5619C9.63156 14.9664 9.65879 15.5852 9.32294 16.0156L9.2404 16.1098L9.14444 16.1939Z"
        fill={fill}
      />
    </Svg>
  );
};

export default SvgComponent;
