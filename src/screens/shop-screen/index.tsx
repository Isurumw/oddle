import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Config from 'react-native-config';
import {useNavigation} from '@react-navigation/native';

import Header from 'components/header';
import Background from 'components/background';
import LoadingIndicator from 'components/loading-indicator';
import MainContent from 'components/main-content';

import {FETCH_MORE_FACTOR} from 'utils/constants';
import {fetchProducts} from './services/fetch-products';

import {useAlert} from 'contexts/alert';

import styles from './styles';

const ShopScreen: React.FC = () => {
  const navigation = useNavigation();
  const {setError} = useAlert();

  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [headerOpacity, setHeaderOpacity] = useState<number>(0);

  useEffect(() => {
    populateProducts();
  }, []);

  const populateProducts = async (last?: string) => {
    try {
      setLoadingProducts(true);
      const products = await fetchProducts(FETCH_MORE_FACTOR, last);
      setProducts(prev => prev.concat(products));
    } catch (e) {
      setError('Something went wrong. Please try again!');
    } finally {
      setLoadingProducts(false);
    }
  };

  const fetchMore = () => {
    if (products.length < FETCH_MORE_FACTOR) return;

    const lastProductId = products[products.length - 1].id;
    populateProducts(lastProductId);
  };

  const configureHeaderOpacity = (y: number) => {
    setHeaderOpacity(y);
  };

  return (
    <View style={styles.container}>
      <Background />
      <Header name={Config.REST_ACCOUNT_NAME} trim opacity={headerOpacity} />
      <LoadingIndicator
        loading={loadingProducts && products.length === 0}
        style={styles.loading}
      />
      <MainContent
        products={products}
        onEndReached={fetchMore}
        onScroll={configureHeaderOpacity}
        navigation={navigation}
        style={styles.content}
      />
    </View>
  );
};

export default ShopScreen;
