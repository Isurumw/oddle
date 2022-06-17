import {StyleSheet} from 'react-native';

import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 10,
    position: 'absolute',
    flexDirection: 'row',
    top: 47,
    zIndex: 3,
    elevation: 3,
    backgroundColor: foundation.white,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
  },
  alertIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  error: {
    borderColor: foundation.bloodRed,
  },
  txtError: {
    color: foundation.bloodRed,
    paddingLeft: 10,
    textAlign: 'left',
    flex: 1,
  },
  success: {
    borderColor: foundation.kiwi,
  },
  txtSuccess: {
    color: foundation.kiwi,
    paddingLeft: 14,
    textAlign: 'left',
  },
});

export default styles;
