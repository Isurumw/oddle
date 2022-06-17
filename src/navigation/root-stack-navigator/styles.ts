import {StyleSheet} from 'react-native';

import {fontStyles} from 'styles/font.style';
import {primary, foundation} from 'styles/colors';

const styles = StyleSheet.create({
  txtTitle: {
    ...fontStyles.H4Regular,
    color: primary.satin,
    marginHorizontal: 20,
  },
  header: {
    backgroundColor: foundation.white,
  },
});

export default styles;
