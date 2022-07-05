import {StyleSheet} from 'react-native';

import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: foundation.white,
  },
  button: {
    backgroundColor: foundation.white,
  },
  shadow: {
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default styles;
