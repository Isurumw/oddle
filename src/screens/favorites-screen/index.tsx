import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from './components/header';
import Background from 'components/background';
import MainContent from 'components/main-content';
import Empty from 'components/empty';

import {useShared} from 'contexts/shared';

import styles from './styles';

const FavoritesScreen: React.FC = () => {
  const navigation = useNavigation();
  const {favoriteProducts} = useShared();

  const [headerOpacity, setHeaderOpacity] = useState<number>(0);

  const configureHeaderOpacity = (y: number) => {
    setHeaderOpacity(y);
  };

  return (
    <View style={styles.container}>
      <Background />
      <Header opacity={headerOpacity} />
      {favoriteProducts.length === 0 && (
        <Empty
          title="No Favorites Found"
          description="Keep track of product listed in by clicking the ♡ icon."
        />
      )}
      <MainContent
        products={favoriteProducts}
        onScroll={configureHeaderOpacity}
        navigation={navigation}
        style={styles.content}
        showHeader={false}
      />
    </View>
  );
};

export default FavoritesScreen;
