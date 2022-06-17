import {GraphQLNetworkManager} from 'shared-services';
import {fetchFavorites} from './';

jest.mock('shared-services/network-services');
const mockedGraphQLService =
  GraphQLNetworkManager as unknown as jest.Mocked<INetworkManager>;

const queryResponse = {
  data: {
    products: [
      {
        id: 'cl4cev9c23lgg0cpnu4zl3ykg',
        name: 'Lippie Stix',
        description: 'Lippie Stix Formula contains Vitamin E',
        price: '0.5',
        brand: 'colourpop',
        tagList: ['cruelty free', 'Vegan'],
        category: 'lipstick',
        productType: 'lipstick',
        apiFeaturedImage:
          '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/046/original/open-uri20180708-4-1f333k1?1531086651',
        websiteLink: 'https://colourpop.com',
        productLink: 'https://colourpop.com/collections/lippie-stix',
      },
      {
        id: 'cl4cev9d83lgp0cpnot1lngtf',
        name: 'Blotted Lip',
        description:
          'Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout!',
        price: '5.5',
        brand: 'colourpop',
        tagList: ['cruelty free', 'Vegan'],
        category: 'lipstick',
        productType: 'lipstick',
        apiFeaturedImage:
          '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336',
        websiteLink: 'https://colourpop.com',
        productLink:
          'https://colourpop.com/collections/lippie-stix?filter=blotted-lip',
      },
    ],
  },
};

describe('check the behavior of the network service:', () => {
  it('fetched favorites successfully', async () => {
    mockedGraphQLService.request.mockImplementation(() =>
      Promise.resolve(queryResponse),
    );
    const response = await fetchFavorites([
      'cl4cev9c23lgg0cpnu4zl3ykg',
      'cl4cev9d83lgp0cpnot1lngtf',
    ]);

    expect(mockedGraphQLService.request).toHaveBeenCalledTimes(1);
    expect(mockedGraphQLService.request).toMatchSnapshot();
    expect(response).toEqual(queryResponse.data.products);
  });

  it('When API throws an error', async () => {
    mockedGraphQLService.request.mockImplementation(() =>
      Promise.reject(new Error('Some API Error')),
    );

    expect(
      fetchFavorites(['cl4cev9c23lgg0cpnu4zl3ykg']),
    ).rejects.toMatchSnapshot();
  });
});
