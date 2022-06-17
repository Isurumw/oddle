import React from 'react';
import {StyleProp, ViewStyle, View} from 'react-native';
import {ActivityIndicator, IconButton} from 'react-native-paper';

import Heart from 'components/icons/icon-heart';

import {foundation} from 'styles/colors';
import styles from './styles';

interface ButtonProps {
  onPress: () => void;
  isFavorite?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

const FavoriteButton: React.FC<ButtonProps> = ({
  onPress,
  isFavorite = false,
  loading = false,
  style,
}) => {
  return (
    <View style={[style, styles.container, styles.shadow]}>
      <IconButton
        onPress={onPress}
        disabled={loading}
        size={18}
        icon={() =>
          loading ? (
            <ActivityIndicator
              animating={true}
              color={foundation.watermelon}
              testID="loading_indicator"
            />
          ) : (
            <Heart width={18} height={19} active={isFavorite} />
          )
        }
        style={styles.button}
        testID="button_favorite"
      />
    </View>
  );
};

export default FavoriteButton;
