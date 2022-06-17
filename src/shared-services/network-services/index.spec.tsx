import fetchMock from 'jest-fetch-mock';
import Config from 'react-native-config';

import NetworkManager from './';

jest.mock('react-native-config', () => ({
  BASEURL: 'URL/',
  AUTH_TOKEN: 'token',
  REST_ACCOUNT_NAME: 'account_name',
}));

describe('check the behavior of the shared network client:', () => {
  beforeEach(() => {
    const returnValue = {
      json: jest.fn(async () => ({
        firstName: 'first_name',
        lastName: 'last_name',
      })),
    };

    fetchMock.mockImplementation(async (): Promise<any> => {
      return Promise.resolve(returnValue);
    });
  });

  afterEach(() => {
    fetchMock.mockClear();
  });

  it('queries and return a value', async (): Promise<void> => {
    const networkProvider = new NetworkManager(
      Config.BASEURL,
      fetch,
      Config.AUTH_TOKEN,
    );

    const result = await networkProvider.request('the_query');

    // //check number of calls on fetch client
    expect(fetch).toHaveBeenCalledTimes(1);

    // //check if the return value is correct
    expect(result).toEqual({
      firstName: 'first_name',
      lastName: 'last_name',
    });

    // //check the query and fetch client payload
    expect(fetch).toHaveBeenCalledWith('URL/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer token',
      },
      body: JSON.stringify({query: 'the_query'}),
    });
  });

  it('rest api call and return a value', async (): Promise<void> => {
    const networkProvider = new NetworkManager(
      Config.BASEURL,
      fetch,
      Config.AUTH_TOKEN,
      Config.REST_ACCOUNT_NAME,
    );

    const response = await networkProvider.request(
      'user',
      {id: 'mock_user_id'},
      'POST',
    );

    //check number of calls on fetch client
    expect(fetch).toBeCalledTimes(1);

    // check if the return value is correct
    expect(response).toEqual({
      firstName: 'first_name',
      lastName: 'last_name',
    });

    // check the query and fetch client payload
    expect(fetch).toHaveBeenCalledWith('URL/account_name/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'token',
      },
      body: JSON.stringify({id: 'mock_user_id'}),
    });
  });
});
