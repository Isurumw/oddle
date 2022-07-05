import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  loading: {
    marginVertical: 20,
  },
  productCard: {
    width: width - 100,
  },
  txtTitle: {
    marginVertical: 10,
  },
});

export default styles;
