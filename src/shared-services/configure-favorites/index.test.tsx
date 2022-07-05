import {RestNetworkManager} from 'shared-services';
import {configureFavorites} from './';

jest.mock('shared-services/network-services');
const mockedRestService =
  RestNetworkManager as unknown as jest.Mocked<INetworkManager>;

const mockResponse = {
  success: true,
};

describe('check the behavior of the network service:', () => {
  afterEach(() => {
    mockedRestService.request.mockClear();
  });

  it('saved favorite successfully', async () => {
    mockedRestService.request.mockImplementation(() =>
      Promise.resolve(mockResponse),
    );
    const response = await configureFavorites(
      'cl4cev9c23lgg0cpnu4zl3ykg',
      'add',
    );

    expect(mockedRestService.request).toHaveBeenCalledTimes(1);
    expect(mockedRestService.request).toMatchSnapshot();
    expect(response).toEqual(mockResponse.success);
  });

  it('removed favorite successfully', async () => {
    mockedRestService.request.mockImplementation(() =>
      Promise.resolve(mockResponse),
    );
    const response = await configureFavorites(
      'cl4cev9c23lgg0cpnu4zl3ykg',
      'remove',
    );

    expect(mockedRestService.request).toHaveBeenCalledTimes(1);
    expect(mockedRestService.request).toMatchSnapshot();
    expect(response).toEqual(mockResponse.success);
  });

  it('When API throws an error', async () => {
    mockedRestService.request.mockImplementation(() =>
      Promise.reject(new Error('Some API Error')),
    );

    expect(
      configureFavorites('cl4cev9c23lgg0cpnu4zl3ykg', 'add'),
    ).rejects.toMatchSnapshot();
  });
});
