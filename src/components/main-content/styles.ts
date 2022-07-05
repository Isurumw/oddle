import {StyleSheet} from 'react-native';

import {foundation} from 'styles/colors';

const styles = (horizontal: boolean) =>
  StyleSheet.create({
    container: {},
    product: {
      marginVertical: 8,
      marginRight: horizontal ? 17 : 0,
    },
    lblProductCount: {
      marginBottom: 10,
      color: foundation.charcoal,
    },
  });

export default styles;
