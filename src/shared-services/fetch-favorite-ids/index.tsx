import {RestNetworkManager} from 'shared-services';

type Response = {
  data: string[];
};

export const fetchFavoriteIds = async (): Promise<string[]> => {
  const response = await RestNetworkManager.request<Response>(
    'favourites',
    undefined,
    'GET',
  );
  return response.data ?? [];
};
