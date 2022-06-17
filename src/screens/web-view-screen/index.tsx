import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

import LoadingIndicator from 'components/loading-indicator';

import styles from './styles';

const WebViewScreen: React.FC = () => {
  const {params} = useRoute<RouteProp<{params: WebViewParams}, 'params'>>();
  const {url} = params;

  const [loading, setLoading] = useState<boolean>(false);

  const onLoad = (state: 'start' | 'end') => {
    setLoading(state === 'start');
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: url}}
        style={styles.content}
        onLoadStart={() => onLoad('start')}
        onLoadEnd={() => onLoad('end')}
        onError={() => onLoad('end')}
      />
      <LoadingIndicator style={styles.loading} loading={loading} />
    </SafeAreaView>
  );
};

export default WebViewScreen;
