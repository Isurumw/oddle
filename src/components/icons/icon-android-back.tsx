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
  width = 16,
  height = 15,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 15" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.68969 6.22089L8.37512 2.5112C8.76256 2.12121 8.76256 1.49162 8.37512 1.10163L7.99601 0.720021C7.60986 0.331333 6.98284 0.325747 6.58983 0.707495L0.303245 6.81393C-0.103009 7.20854 -0.100778 7.86147 0.308163 8.25329L6.59 14.2723C6.98369 14.6495 7.60699 14.6418 7.99126 14.255L8.37512 13.8686C8.76256 13.4786 8.76256 12.849 8.37512 12.459L4.68969 8.74933H14.2449C14.7972 8.74933 15.2449 8.30162 15.2449 7.74933V7.22089C15.2449 6.66861 14.7972 6.22089 14.2449 6.22089L4.68969 6.22089Z"
        fill={fill}
      />
    </Svg>
  );
};

export default SvgComponent;
