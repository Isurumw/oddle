import stripIndent from 'strip-indent';
import {GraphQLNetworkManager} from 'shared-services';

const query = stripIndent(`
query fetchProducts($first: Int!, $after: String) {
    products(first: $first, after:$after) {
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

export const fetchProducts = async (
  first: number,
  after?: string,
): Promise<Product[]> => {
  const response = await GraphQLNetworkManager.request<Response>(query, {
    first,
    after,
  });
  return response.data.products ?? [];
};
