import {Platform} from 'react-native';
import {IBM_PLEX_SANS_BOLD, IBM_PLEX_SANS_REGULAR} from './fonts';

export const fontStyles = {
  H1Bold: {
    fontFamily: IBM_PLEX_SANS_BOLD,
    fontSize: 26,
    lineHeight: 33.8,
  },
  H2Regular: {
    fontFamily: IBM_PLEX_SANS_REGULAR,
    fontSize: 24,
    lineHeight: 31.2,
  },
  H2Bold: {
    fontFamily: IBM_PLEX_SANS_BOLD,
    fontSize: 24,
    lineHeight: 31.2,
  },
  H3Regular: {
    fontFamily: IBM_PLEX_SANS_REGULAR,
    fontSize: 20,
    lineHeight: 26,
  },
  H3Bold: {
    fontFamily: IBM_PLEX_SANS_BOLD,
    fontSize: 20,
    lineHeight: 26,
  },
  H4Regular: {
    fontFamily: IBM_PLEX_SANS_REGULAR,
    fontSize: 18,
    lineHeight: 23.4,
  },
  H4Bold: {
    fontFamily: IBM_PLEX_SANS_BOLD,
    fontSize: 18,
    lineHeight: 23.4,
  },
  paragraphRegular: {
    fontFamily: IBM_PLEX_SANS_REGULAR,
    fontSize: 16,
    lineHeight: 20,
  },
  paragraphBold: {
    fontFamily: IBM_PLEX_SANS_BOLD,
    fontSize: 16,
    lineHeight: 22,
  },
  smallParagraphRegular: {
    fontFamily: IBM_PLEX_SANS_REGULAR,
    fontSize: 14,
    lineHeight: 20,
  },
  smallParagraphBold: {
    fontFamily: IBM_PLEX_SANS_BOLD,
    fontSize: 14,
    lineHeight: 20,
  },
  textLink: {
    fontFamily: IBM_PLEX_SANS_REGULAR,
    fontSize: 16,
    lineHeight: 20,
    ...Platform.select({
      ios: {
        fontWeight: 400,
      },
    }),
  },
  formTitle: {
    fontFamily: IBM_PLEX_SANS_REGULAR,
    fontSize: 10,
    lineHeight: 12,
  },
};
