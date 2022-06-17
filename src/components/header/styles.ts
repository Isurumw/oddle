import {StyleSheet, Platform} from 'react-native';

import {foundation, addAlpha, primary} from 'styles/colors';
const OPACITY_FACTOR = 100;

const styles = (opacity: number) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingBottom: 10,
      ...Platform.select({
        ios: {
          paddingTop: 40,
        },
        android: {
          paddingTop: 16,
        },
      }),
      backgroundColor: addAlpha(foundation.white, opacity / OPACITY_FACTOR),
    },
    content: {
      marginLeft: 10,
      flex: 1,
    },
    shadowWrapper: {
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: opacity < 0 ? 0 : opacity > 1 ? 1 : opacity,
    },
    txtTitle: {
      color: foundation.charcoal,
    },
    banner: {
      backgroundColor: primary.transparent,
    },
  });

export default styles;
