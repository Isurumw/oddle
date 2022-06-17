import stripIndent from 'strip-indent';
import {GraphQLNetworkManager} from 'shared-services';

const query = stripIndent(`
query fetchFavorites($ids: [ID!]) {
    products(where: {id_in: $ids}) {
      id
      name
      description
      rating
      price
      brand
      tagList
      category
      productType
      apiFeaturedImage
      websiteLink
      productLink
    }
  }
`);

type Response = {
  data: {
    products: Product[];
  };
};

export const fetchFavorites = async (ids: string[]): Promise<Product[]> => {
  const response = await GraphQLNetworkManager.request<Response>(query, {
    ids,
  });
  return response.data.products ?? [];
};
