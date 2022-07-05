import React, {useMemo} from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-paper';

import {H1} from 'components/typography';

import _styles from './styles';

interface HeaderProps {
  opacity?: number;
}

const Header: React.FC<HeaderProps> = ({opacity = 0}) => {
  const styles = useMemo(() => _styles(opacity), [opacity]);
  return (
    <View style={styles.container}>
      <H1 style={styles.txtTitle} bold>
        Favorites
      </H1>
      <Avatar.Image
        size={50}
        style={styles.avatar}
        source={require('assets/images/avatar.png')}
      />
    </View>
  );
};

export default Header;
