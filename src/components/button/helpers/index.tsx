import {ButtonMode, ButtonType} from '../';
import {fetchFontFamily, fetchFontWeight} from 'shared-services/helpers';

import {fontStyles} from 'components/typography/styles';
import {foundation} from 'styles/colors';

export const fetchOpacity = (isDisabled: boolean) => {
  return isDisabled ? 0.5 : 1;
};

export const fetchRadius = (type?: ButtonType) => {
  switch (type) {
    case 'small':
      return 4;
    case 'medium':
      return 6;
    case 'large':
      return 12;
    default:
      return 12;
  }
};

export const fetchBorderWidth = (mode?: ButtonMode) => {
  switch (mode) {
    case 'text':
      return 0;
    case 'contained':
      return 0;
    case 'outlined':
      return 1;
    default:
      return 0;
  }
};

export const fetchBorderColor = (isActive: boolean, mode?: ButtonMode) => {
  switch (mode) {
    case 'outlined':
      return isActive ? foundation.black : foundation.tin;
    default:
      return undefined;
  }
};

export const fetchHeight = (type?: ButtonType) => {
  switch (type) {
    case 'small':
      return 38;
    case 'medium':
      return 46;
    case 'large':
      return 60;
    default:
      return 60;
  }
};

export const fetchBackgroundColor = (
  isDisabled: boolean,
  isActive: boolean,
  mode?: ButtonMode,
) => {
  switch (mode) {
    case 'contained':
      return isDisabled ? foundation.black : foundation.grape;
    case 'outlined':
      return foundation.white;
    case 'text':
      return isActive ? foundation.lightBlue : undefined;
    default:
      return undefined;
  }
};

export const fetchLabelFont = (type?: ButtonType) => {
  switch (type) {
    case 'small':
      return fontStyles.textLink;
    case 'medium':
      return fontStyles.H4;
    case 'large':
      return fontStyles.H3;
    default:
      return fontStyles.paragraph;
  }
};

export const fetchLabelColor = (mode?: ButtonMode) => {
  switch (mode) {
    case 'contained':
      return foundation.white;
    default:
      return foundation.black;
  }
};

export const fetchLabelMarginVertical = (type?: ButtonType) => {
  switch (type) {
    case 'small':
      return 8;
    case 'medium':
      return 12;
    case 'large':
      return 16;
    default:
      return 16;
  }
};

export const fetchLabelFontFamily = (isActive: boolean, mode?: ButtonMode) => {
  switch (mode) {
    case 'outlined':
      return {
        fontFamily: fetchFontFamily(isActive),
        fontWeight: fetchFontWeight(isActive),
      };
    default:
      return {
        fontFamily: fetchFontFamily(true),
        fontWeight: fetchFontWeight(true),
      };
  }
};
