import React, {useEffect, useMemo, useState} from 'react';
import {View, ScrollView} from 'react-native';
import Config from 'react-native-config';
import {useNavigation} from '@react-navigation/native';

import Empty from 'components/empty';
import Header from 'components/header';
import Background from 'components/background';
import {H2} from 'components/typography';
import MainContent from 'components/main-content';
import LoadingIndicator from 'components/loading-indicator';

import {FETCH_MORE_FACTOR} from 'utils/constants';
import {highestOccurrence} from 'shared-services/helpers';

import {fetchProducts} from './services/fetch-products';

import {useShared} from 'contexts/shared';
import {useAlert} from 'contexts/alert';

import styles from './styles';

let productType: string;
let _productBrand: string;
let _productCategory: string;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const {setError} = useAlert();
  const {productTypes, productBrands, productCategories} = useShared();

  const [loadingProducts, setLoadingProducts] = useState<
    ProductFetchType | 'none'
  >('none');
  const [typeBasedProducts, setTypeBasedProducts] = useState<Product[]>([]);
  const [brandBasedProducts, setBrandBasedProducts] = useState<Product[]>([]);
  const [categoryBasedProducts, setCategoryBasedProducts] = useState<Product[]>(
    [],
  );

  const [productBrandName, setProductBrandName] = useState<string>();
  const [productCategoryName, setProductCategoryName] = useState<string>();

  useEffect(() => {
    if (productTypes.length === 0) return setTypeBasedProducts([]);

    const type = highestOccurrence(productTypes);
    if (type) {
      productType = type;
      populateProducts(type, 'productType');
    }
  }, [productTypes]);

  useEffect(() => {
    if (productBrands.length === 0) return setBrandBasedProducts([]);

    const brand = highestOccurrence(productBrands);
    if (brand) {
      _productBrand = brand;
      setProductBrandName(brand);
      populateProducts(brand, 'brand');
    }
  }, [productBrands]);

  useEffect(() => {
    if (productCategories.length === 0) return setCategoryBasedProducts([]);

    const category = highestOccurrence(productCategories);
    if (category) {
      _productCategory = category;
      setProductCategoryName(category);
      populateProducts(category, 'category');
    }
  }, [productCategories]);

  const populateProducts = async (
    value: string,
    type: ProductFetchType,
    last?: string,
  ) => {
    try {
      setLoadingProducts(type);
      const products = await fetchProducts(
        type,
        FETCH_MORE_FACTOR,
        value,
        last,
      );

      if (type === 'productType')
        setTypeBasedProducts(prev => (last ? prev.concat(products) : products));
      else if (type === 'brand')
        setBrandBasedProducts(prev =>
          last ? prev.concat(products) : products,
        );
      else
        setCategoryBasedProducts(prev =>
          last ? prev.concat(products) : products,
        );
    } catch (e) {
      setError('Something went wrong. Please try again!');
    } finally {
      setLoadingProducts('none');
    }
  };

  const products = (type: ProductFetchType) => {
    return type === 'productType'
      ? typeBasedProducts
      : type === 'brand'
      ? brandBasedProducts
      : categoryBasedProducts;
  };

  const listFactor = (type: ProductFetchType) => {
    return type === 'productType'
      ? productType
      : type === 'brand'
      ? _productBrand
      : _productCategory;
  };

  const listTitle = (type: ProductFetchType) => {
    return type === 'productType'
      ? 'Recommended for you'
      : type === 'brand'
      ? `Because you like ${productBrandName}`
      : `Because you like ${productCategoryName}`;
  };

  const fetchMoreProducts = (type: ProductFetchType) => {
    const _products = products(type);
    if (_products.length < FETCH_MORE_FACTOR) return;

    const lastProductId = _products[_products.length - 1].id;
    populateProducts(listFactor(type), type, lastProductId);
  };

  const renderProducts = (type: ProductFetchType) =>
    useMemo(() => {
      if (products(type).length === 0) return undefined;

      return (
        <>
          <H2 style={styles.txtTitle}>{listTitle(type)}</H2>
          <MainContent
            products={products(type)}
            onEndReached={() => fetchMoreProducts(type)}
            navigation={navigation}
            style={styles.content}
            horizontal
            showHeader={false}
            cardStyle={styles.productCard}
          />
        </>
      );
    }, [products(type)]);

  const renderEmptyDesign = useMemo(() => {
    if (
      typeBasedProducts.length > 0 ||
      brandBasedProducts.length > 0 ||
      categoryBasedProducts.length > 0 ||
      loadingProducts !== 'none'
    )
      return undefined;
    return (
      <Empty
        title="No Recommendations Found"
        description="Keep track of product listed in by clicking the ♡ icon."
      />
    );
  }, [
    typeBasedProducts,
    brandBasedProducts,
    loadingProducts,
    categoryBasedProducts,
  ]);

  return (
    <View style={styles.container}>
      <Background />
      <Header name={Config.REST_ACCOUNT_NAME} />
      <LoadingIndicator
        loading={
          loadingProducts !== 'none' &&
          typeBasedProducts.length === 0 &&
          brandBasedProducts.length === 0
        }
        style={styles.loading}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderEmptyDesign}
        {renderProducts('productType')}
        {renderProducts('brand')}
        {renderProducts('category')}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
