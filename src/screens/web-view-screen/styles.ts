import {StyleSheet, Dimensions} from 'react-native';

import {foundation, primary} from 'styles/colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: foundation.white,
  },
  content: {
    backgroundColor: primary.transparent,
    flexGrow: 1,
  },
  loading: {
    position: 'absolute',
    top: height / 2,
    right: width / 2,
  },
});

export default styles;
