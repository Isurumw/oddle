import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import {foundation} from 'styles/colors';

interface LoadingProps {
  loading?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const LoadingIndicator: React.FC<LoadingProps> = ({
  loading = false,
  color = foundation.grape10,
  style,
}) => {
  if (!loading) return null;
  return (
    <ActivityIndicator
      style={style}
      animating={true}
      color={color}
      testID="loading_indicator"
    />
  );
};

export default LoadingIndicator;
