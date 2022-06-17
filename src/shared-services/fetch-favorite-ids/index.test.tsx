import {RestNetworkManager} from 'shared-services';
import {fetchFavoriteIds} from './';

jest.mock('shared-services/network-services');
const mockedRestService =
  RestNetworkManager as unknown as jest.Mocked<INetworkManager>;

const mockResponse = {
  data: ['cl4cevbjy3liu0cpnim92e5eo'],
};

describe('check the behavior of the network service:', () => {
  it('fetched product ids successfully', async () => {
    mockedRestService.request.mockImplementation(() =>
      Promise.resolve(mockResponse),
    );
    const response = await fetchFavoriteIds();

    expect(mockedRestService.request).toHaveBeenCalledTimes(1);
    expect(mockedRestService.request).toMatchSnapshot();
    expect(response).toEqual(mockResponse.data);
  });

  it('When API throws an error', async () => {
    mockedRestService.request.mockImplementation(() =>
      Promise.reject(new Error('Some API Error')),
    );

    expect(fetchFavoriteIds()).rejects.toMatchSnapshot();
  });
});
