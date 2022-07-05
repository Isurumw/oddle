import {StyleSheet, Platform} from 'react-native';

import {fetchLineDecoration} from './helpers';
import {fetchFontFamily, fetchFontWeight} from 'shared-services/helpers';

const styles = (color: string, underline: boolean, bold: boolean) =>
  StyleSheet.create({
    base: {
      color: color,
      textDecorationLine: fetchLineDecoration(underline),
      fontFamily: fetchFontFamily(bold),
      ...Platform.select({
        ios: {
          fontWeight: fetchFontWeight(bold),
        },
      }),
    },
  });

export const fontStyles = {
  H1: {
    fontSize: 26,
    lineHeight: 33.8,
  },
  H2: {
    fontSize: 24,
    lineHeight: 31.2,
  },
  H3: {
    fontSize: 20,
    lineHeight: 26,
  },
  H4: {
    fontSize: 18,
    lineHeight: 23.4,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 20,
  },
  smallParagraph: {
    fontSize: 14,
    lineHeight: 20,
  },
  textLink: {
    fontSize: 16,
    lineHeight: 20,
  },
  formTitle: {
    fontSize: 10,
    lineHeight: 12,
  },
};

export default styles;
