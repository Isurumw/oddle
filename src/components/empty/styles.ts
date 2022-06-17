import {StyleSheet} from 'react-native';

import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
    marginHorizontal: '10%',
    alignItems: 'center',
  },
  txtTitle: {
    color: foundation.satin,
  },
  txtDescription: {
    marginTop: 8,
    color: foundation.charcoal,
    textAlign: 'center',
  },
  banner: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    opacity: 0.6,
  },
});

export default styles;
