import {StyleSheet, Platform} from 'react-native';

import {foundation, addAlpha, primary} from 'styles/colors';
const OPACITY_FACTOR = 250;

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
    txtTitle: {
      flex: 1,
    },
    avatar: {
      backgroundColor: primary.transparent,
    },
  });

export default styles;
