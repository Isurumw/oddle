import React, {useMemo, useState} from 'react';
import {FlatList, NativeScrollEvent, StyleProp, ViewStyle} from 'react-native';

import ProductCard from 'components/product-card';
import {SmallParagraph} from 'components/typography';

import {
  openWeb,
  isFavoriteId,
  configureLocalFavorites,
  filteredField,
} from 'shared-services/helpers';
import {configureFavorites} from 'shared-services/configure-favorites';

import {useAlert} from 'contexts/alert';
import {useShared} from 'contexts/shared';

import {WEB_VIEW_SCREEN} from 'navigation';

import _styles from './styles';

interface MainContentProps {
  products: Product[];
  onScroll?: (y: number) => void;
  onEndReached?: () => void;
  navigation: any;
  showHeader?: boolean;
  horizontal?: boolean;
  style?: StyleProp<ViewStyle>;
  cardStyle?: StyleProp<ViewStyle>;
}

const MainContent: React.FC<MainContentProps> = ({
  products,
  onScroll,
  onEndReached,
  navigation,
  horizontal = false,
  showHeader = true,
  style,
  cardStyle,
}) => {
  const styles = useMemo(() => _styles(horizontal), [horizontal]);

  const {setError} = useAlert();
  const {
    favoriteIdObjects,
    setFavoriteIdObjects,
    productTypes,
    setProductTypes,
    productBrands,
    setProductBrand,
    productCategories,
    setProductCategories,
  } = useShared();

  const [favoriteId, setAddingFavoriteId] = useState<string>();

  const addToFavorites = async (product: Product) => {
    const isFavorite = isFavoriteId(favoriteIdObjects, product.id);
    try {
      setAddingFavoriteId(product.id);
      const success = await configureFavorites(
        product.id,
        isFavorite ? 'remove' : 'add',
      );
      if (success) {
        const newObjects = configureLocalFavorites(
          favoriteIdObjects,
          product.id,
          isFavorite,
        );
        setFavoriteIdObjects(newObjects);
        /** configure product types */
        configureProductTypes(isFavorite, product.productType);
        /** configure brands */
        configureBrands(isFavorite, product.brand);
        /** configure categories */
        configureCategories(isFavorite, product.category);
      } else {
        setError('Something went wrong. Please try again!');
      }
    } catch (e) {
      setError('Something went wrong. Please try again!');
    } finally {
      setAddingFavoriteId(undefined);
    }
  };

  const configureProductTypes = async (exist: boolean, type?: string) => {
    if (!type) return;

    const filtered = filteredField(
      type,
      productTypes,
      exist ? 'remove' : 'add',
    );
    setProductTypes(filtered);
  };

  const configureBrands = async (exist: boolean, brand?: string) => {
    if (!brand) return;

    const filtered = filteredField(
      brand,
      productBrands,
      exist ? 'remove' : 'add',
    );
    setProductBrand(filtered);
  };

  const configureCategories = async (exist: boolean, category?: string) => {
    if (!category) return;

    const filtered = filteredField(
      category,
      productCategories,
      exist ? 'remove' : 'add',
    );
    setProductCategories(filtered);
  };

  const viewBrand = async (product: Product) => {
    try {
      await openWeb(product.websiteLink);
    } catch (error) {
      setError('There is now web link available!');
    }
  };

  const orderNow = (product: Product) => {
    if (!product.productLink)
      return setError('There is now product link available!');
    navigation.navigate(WEB_VIEW_SCREEN, {
      title: product.name,
      url: product.productLink,
    });
  };

  const renderProduct = ({item}: {item: Product}) => {
    return (
      <ProductCard
        product={item}
        onPressAddToFavorites={() => addToFavorites(item)}
        onPressViewBrand={() => viewBrand(item)}
        onPressOrderNow={() => orderNow(item)}
        isFavorite={isFavoriteId(favoriteIdObjects, item.id)}
        style={[styles.product, cardStyle]}
        addingFavorite={item.id === favoriteId}
      />
    );
  };

  const trackItem = (item: Product, index: number) => `${index}_${item.id}`;

  const renderListHeader = useMemo(() => {
    if (products.length === 0 || !showHeader) return null;
    return (
      <SmallParagraph
        style={
          styles.lblProductCount
        }>{`${products.length} products sorted by price`}</SmallParagraph>
    );
  }, [products, showHeader]);

  const checkScroll = (nativeEvent: NativeScrollEvent) => {
    if (!onScroll) return;
    onScroll(
      horizontal ? nativeEvent.contentOffset.x : nativeEvent.contentOffset.y,
    );
  };

  return (
    <FlatList
      horizontal={horizontal}
      data={products}
      renderItem={renderProduct}
      keyExtractor={trackItem}
      contentContainerStyle={[styles.container, style]}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      onScroll={({nativeEvent}) => checkScroll(nativeEvent)}
      ListHeaderComponent={() => renderListHeader}
    />
  );
};

export default MainContent;
