import {StyleSheet} from 'react-native';

import {
  fetchOpacity,
  fetchRadius,
  fetchBorderWidth,
  fetchBorderColor,
  fetchHeight,
  fetchBackgroundColor,
  fetchLabelFont,
  fetchLabelColor,
  fetchLabelMarginVertical,
  fetchLabelFontFamily,
} from './helpers';
import {ButtonMode, ButtonType} from './';

const styles = (
  active: boolean,
  disabled: boolean,
  mode?: ButtonMode,
  type?: ButtonType,
) =>
  StyleSheet.create({
    container: {
      opacity: fetchOpacity(disabled),
      borderRadius: fetchRadius(type),
      borderWidth: fetchBorderWidth(mode),
      borderColor: fetchBorderColor(active, mode),
    },
    content: {
      height: fetchHeight(type),
      backgroundColor: fetchBackgroundColor(disabled, active, mode),
    },
    label: {
      ...fetchLabelFont(type),
      ...fetchLabelFontFamily(active, mode),
      color: fetchLabelColor(mode),
      marginVertical: fetchLabelMarginVertical(type),
      marginHorizontal: 20,
      letterSpacing: 0,
    },
  });

export default styles;
