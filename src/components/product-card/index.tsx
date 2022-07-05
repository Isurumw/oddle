import React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card, Chip} from 'react-native-paper';

import Button from 'components/button';
import Star from 'components/icons/icon-star';
import Currency from 'components/icons/icon-min-order';
import Information from 'components/icons/icon-information';
import {H3, SmallParagraph} from 'components/typography';
import FavoriteButton from './components/favorite-button';

import {joinedTags} from './helpers';

import styles from './styles';

interface CardProps {
  product: Product;
  onPressViewBrand: () => void;
  onPressOrderNow: () => void;
  onPressAddToFavorites: () => void;
  isFavorite?: boolean;
  addingFavorite?: boolean;
  style?: StyleProp<ViewStyle>;
}

let backCount = 0;

const ProductCard: React.FC<CardProps> = ({
  product,
  onPressViewBrand,
  onPressOrderNow,
  onPressAddToFavorites,
  isFavorite = false,
  addingFavorite = false,
  style,
}) => {
  const onPressCover = () => {
    backCount++;
    if (backCount === 2) onPressAddToFavorites();
    /** mention here the time for clearing the counter in ms */
    setTimeout(() => (backCount = 0), 500);
  };
  return (
    <Card style={style}>
      <TouchableWithoutFeedback onPress={onPressCover} testID="button_cover">
        <Card.Cover
          source={{uri: `https:${product.apiFeaturedImage}`}}
          resizeMethod="resize"
        />
      </TouchableWithoutFeedback>
      <Chip mode="flat" style={[styles.chip, styles.shadowWrapper]}>
        {product.brand ?? 'N/A'}
      </Chip>
      <FavoriteButton
        onPress={onPressAddToFavorites}
        style={styles.btnFavorites}
        isFavorite={isFavorite}
        loading={addingFavorite}
      />
      <Card.Content style={styles.content}>
        <H3 bold>{product.name ?? 'N/A'}</H3>
        <SmallParagraph style={styles.txtTags}>
          {joinedTags(product.tagList)}
        </SmallParagraph>
        <View style={styles.ratingAndPrice}>
          <View style={styles.rating}>
            <Star width={16} height={20} />
            <SmallParagraph style={styles.txtParagraph}>
              {product.rating ?? 'N/A'}
            </SmallParagraph>
          </View>
          <View style={styles.price}>
            <Currency width={16} height={20} />
            <SmallParagraph style={styles.txtParagraph}>
              {product.price ?? 'N/A'}
            </SmallParagraph>
          </View>
        </View>
        <View style={styles.info}>
          <Information width={16} height={20} />
          <SmallParagraph style={styles.txtParagraph}>
            {`${product.category ?? 'N/A'} - ${product.productType ?? 'N/A'}`}
          </SmallParagraph>
        </View>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button
          mode="outlined"
          uppercase={false}
          onPress={onPressViewBrand}
          testID="button_view_brand">
          View Brand
        </Button>
        <Button
          mode="contained"
          uppercase={false}
          style={styles.btnOrderNow}
          onPress={onPressOrderNow}
          testID="button_order_now">
          Order Now
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default ProductCard;
