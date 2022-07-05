import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {foundation} from 'styles/colors';

interface SvgProp {
  fill?: string;
  width?: number;
  height?: number;
}

const SvgComponent: React.FC<SvgProp> = ({
  fill = foundation.kiwi,
  width = 24,
  height = 25,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.6673 12.4247C22.6673 18.3158 17.8917 23.0914 12.0007 23.0914C6.10961 23.0914 1.33398 18.3158 1.33398 12.4247C1.33398 6.53369 6.10961 1.75806 12.0007 1.75806C17.8917 1.75806 22.6673 6.53369 22.6673 12.4247ZM9.57484 16.7573C9.96248 17.1102 10.5568 17.1039 10.9369 16.7428L18.1747 9.86562C18.5822 9.47843 18.5906 8.83155 18.1933 8.4339L18.0121 8.25248C17.6282 7.86819 17.0077 7.86069 16.6145 8.23559L10.2626 14.2931L7.64669 12.0813C7.24 11.7374 6.63517 11.7726 6.27113 12.1613L6.16149 12.2784C5.7802 12.6856 5.80571 13.3259 6.21819 13.7014L9.57484 16.7573Z"
        fill={fill}
      />
    </Svg>
  );
};

export default SvgComponent;
