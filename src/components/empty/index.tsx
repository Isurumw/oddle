import React from 'react';
import {View, Image} from 'react-native';

import {SmallParagraph, H4} from 'components/typography';

import styles from './styles';

interface EmptyProps {
  title: string;
  description?: string;
}

const Empty: React.FC<EmptyProps> = ({title, description}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.banner}
        source={require('assets/images/empty_favorites.png')}
      />
      <H4 style={styles.txtTitle} bold>
        {title}
      </H4>
      {description && (
        <SmallParagraph style={styles.txtDescription}>
          {description}
        </SmallParagraph>
      )}
    </View>
  );
};

export default Empty;
