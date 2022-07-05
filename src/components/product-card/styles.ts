import {StyleSheet} from 'react-native';

import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  content: {
    flex: 1,
  },
  btnOrderNow: {
    marginLeft: 10,
  },
  txtTags: {
    color: foundation.charcoal,
    marginTop: 10,
  },
  ratingAndPrice: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtParagraph: {
    marginLeft: 4,
  },
  actions: {
    marginTop: 11,
  },
  chip: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  shadowWrapper: {
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2,
  },
  btnFavorites: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default styles;
