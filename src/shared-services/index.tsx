import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

import _StorageService from './storage-service';
import _NetworkManager from './network-services';

const StorageService = new _StorageService(AsyncStorage);

const RestNetworkManager = new _NetworkManager(
  Config.REST_BASEURL,
  fetch,
  Config.REST_AUTH_TOKEN,
  Config.REST_ACCOUNT_NAME,
);

const GraphQLNetworkManager = new _NetworkManager(
  Config.GRAPH_BASEURL,
  fetch,
  Config.GRAPH_AUTH_TOKEN,
);

export {StorageService, RestNetworkManager, GraphQLNetworkManager};
