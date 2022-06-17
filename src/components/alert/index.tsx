import React from 'react';
import {View} from 'react-native';

import {useAlert} from 'contexts/alert';
import {SmallParagraph} from 'components/typography';
import Info from 'components/icons/icon-information';
import CheckMark from 'components/icons/icon-confirmed';

import {foundation} from 'styles/colors';
import styles from './styles';

const Alert: React.FC = (): JSX.Element | null => {
  const {error, success} = useAlert();

  if (error) {
    return (
      <View style={[styles.container, styles.error]}>
        <Info fill={foundation.bloodRed} />
        <SmallParagraph style={styles.txtError}>{error}</SmallParagraph>
      </View>
    );
  }

  if (success) {
    return (
      <View style={[styles.container, styles.success]}>
        <CheckMark fill={foundation.kiwi} />
        <SmallParagraph style={styles.txtSuccess}>{success}</SmallParagraph>
      </View>
    );
  }

  return null;
};

export default Alert;
