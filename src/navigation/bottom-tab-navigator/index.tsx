import React, {useEffect, useState} from 'react';
import {BottomNavigation} from 'react-native-paper';

import HomeScreen from 'screens/home-screen';
import ShopScreen from 'screens/shop-screen';
import FavoritesScreen from 'screens/favorites-screen';

import AddressBook from 'components/icons/icon-address-book';
import Heart from 'components/icons/icon-heart';
import Shop from 'components/icons/icon-shop';
import {FormTitle} from 'components/typography';

import {fetchFavorites} from './services/fetch-favorites';
import {capitalize, fetchFavoriteObjects} from 'shared-services/helpers';
import {fetchFavoriteIds} from 'shared-services/fetch-favorite-ids';
import {filterOutFavoriteIds} from 'shared-services/helpers';

import {useAlert} from 'contexts/alert';
import {useShared} from 'contexts/shared';

import styles from './styles';

const BottomNavigator: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([{key: 'home'}, {key: 'shop'}, {key: 'favorites'}]);

  const {setError} = useAlert();
  const {
    favoriteIdObjects,
    setFavoriteIdObjects,
    setProductTypes,
    setProductBrand,
    setProductCategories,
    setFavoriteProducts,
  } = useShared();

  useEffect(() => {
    populateFavoriteIds();
  }, []);

  useEffect(() => {
    if (favoriteIdObjects.length === 0) return;
    populateFavorites(favoriteIdObjects);
  }, [favoriteIdObjects]);

  const populateFavorites = async (objects: FavoriteIdObject[]) => {
    try {
      const products = await fetchFavorites(filterOutFavoriteIds(objects));
      setFavoriteProducts(products);
      const liked = objects.filter(o => o.liked).map(o => o.id);
      /** configure product types */
      configureProductTypes(liked, products);
      /** configure brands */
      configureBrands(liked, products);
      /** configure categories */
      configureCategories(liked, products);
    } catch (e) {
      setError('Something went wrong, while fetching favorites!');
    }
  };

  const configureProductTypes = (liked: string[], products: Product[]) => {
    const types = products
      .filter(p => liked.includes(p.id))
      .map(product => product.productType);
    setProductTypes(types);
  };

  const configureBrands = (liked: string[], products: Product[]) => {
    const brands = products
      .filter(p => liked.includes(p.id))
      .map(product => product.brand);
    setProductBrand(brands);
  };

  const configureCategories = (liked: string[], products: Product[]) => {
    const categories = products
      .filter(p => liked.includes(p.id))
      .map(product => product.category);
    setProductCategories(categories);
  };

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    shop: ShopScreen,
    favorites: FavoritesScreen,
  });

  const populateFavoriteIds = async () => {
    try {
      const ids = await fetchFavoriteIds();
      const objects = fetchFavoriteObjects(ids);
      setFavoriteIdObjects(objects);
    } catch (e) {
      setError('Something went wrong, while fetching favorite ids!');
    } finally {
      /** TODO: */
    }
  };

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.container}
      renderIcon={({route, focused}) => {
        if (route.key === 'home')
          return <AddressBook active={focused} width={34} height={34} />;
        else if (route.key === 'shop')
          return (
            <Shop style={styles.shop} active={focused} width={44} height={41} />
          );
        else return <Heart active={focused} width={34} height={34} />;
      }}
      renderLabel={({route, focused}) => {
        return (
          <FormTitle style={styles.label}>{capitalize(route.key)}</FormTitle>
        );
      }}
    />
  );
};

export default BottomNavigator;
