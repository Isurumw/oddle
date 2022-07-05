import React, {useMemo} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {Avatar} from 'react-native-paper';

import {SmallParagraph, H3} from 'components/typography';

import {trimmedText, timeDescription} from './helpers';

import _styles from './styles';

interface HeaderProps {
  name?: string;
  trim?: boolean;
  opacity?: number;
  style?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({
  name = 'N/A',
  trim = false,
  opacity = 0,
  style,
}) => {
  const styles = useMemo(() => _styles(opacity), [opacity]);
  return (
    <View style={[styles.container, style]}>
      <Avatar.Image
        size={50}
        style={styles.banner}
        source={require('assets/images/avatar.png')}
      />
      <View style={styles.content}>
        <SmallParagraph style={styles.txtTitle}>
          {timeDescription()}
        </SmallParagraph>
        <H3>{trimmedText(name, trim)}</H3>
      </View>
    </View>
  );
};

export default Header;
