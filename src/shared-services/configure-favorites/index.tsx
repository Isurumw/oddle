import {RestNetworkManager} from 'shared-services';

type Response = {
  success?: boolean;
};

export const configureFavorites = async (
  id: string,
  state: 'add' | 'remove',
): Promise<boolean> => {
  const response = await RestNetworkManager.request<Response>(
    `favourites/${id}`,
    undefined,
    state === 'add' ? 'PATCH' : 'DELETE',
  );
  return response.success ?? false;
};
