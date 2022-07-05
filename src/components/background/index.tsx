import React from 'react';
import {Image} from 'react-native';

import styles from './styles';

const Background: React.FC = () => {
  return (
    <Image
      style={styles.container}
      source={require('assets/images/gradient.png')}
    />
  );
};

export default Background;
