import {Linking} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import {StorageService} from 'shared-services';

import {IBM_PLEX_SANS_REGULAR, IBM_PLEX_SANS_BOLD} from 'styles/fonts';
import {PRODUCT_TYPES} from 'utils/constants';

export const fetchFontFamily = (isBold: boolean) => {
  return isBold ? IBM_PLEX_SANS_BOLD : IBM_PLEX_SANS_REGULAR;
};

export const fetchFontWeight = (isBold: boolean) => {
  return isBold ? '700' : '400';
};

export const capitalize = (text: string): string => {
  const word = text.split('_').join(' ');
  const lowerCaseText = word.toLowerCase();
  return lowerCaseText.charAt(0).toUpperCase() + lowerCaseText.slice(1);
};

export const openWeb = async (url?: string) => {
  if (!url) throw new Error('The url is not available');
  if (await InAppBrowser.isAvailable()) {
    InAppBrowser.openAuth(url, url, {
      // iOS Properties
      ephemeralWebSession: false,
      // Android Properties
      showTitle: false,
      enableUrlBarHiding: true,
      enableDefaultShare: false,
    }).then(response => {
      if (response.type === 'success' && response.url)
        Linking.openURL(response.url);
    });
  }
};

export const fetchFavoriteObjects = (ids: string[]) => {
  const objects: FavoriteIdObject[] = ids.map(id => {
    return {id: id, liked: true};
  });

  return objects;
};

export const filterOutFavoriteIds = (objects: FavoriteIdObject[]) => {
  const ids: string[] = objects.map(object => {
    return object.id;
  });

  return ids;
};

export const isFavoriteId = (objects: FavoriteIdObject[], id: string) => {
  const filtered = objects.filter(object => object.id === id && object.liked);
  return filtered.length > 0;
};

export const configureLocalFavorites = (
  objects: FavoriteIdObject[],
  id: string,
  isFavorite?: boolean,
) => {
  const _isFavorite = isFavorite ?? isFavoriteId(objects, id);
  const filtered = objects.filter(object => object.id !== id);

  return filtered.concat([{id: id, liked: !_isFavorite}]);
};

export const filteredField = (
  field: string,
  array: string[],
  state: 'add' | 'remove',
) => {
  const _array = Array.from(array);
  if (state === 'add') _array.push(field);
  else
    _array.splice(
      _array.findIndex(b => b === field),
      1,
    );
  return _array;
};

export const highestOccurrence = (array: string[]) => {
  const _array = Array.from(array);
  return _array
    .sort(
      (a, b) =>
        _array.filter(v => v === a).length - _array.filter(v => v === b).length,
    )
    .pop();
};
