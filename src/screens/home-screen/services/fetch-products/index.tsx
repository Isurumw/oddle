import stripIndent from 'strip-indent';
import {GraphQLNetworkManager} from 'shared-services';

import {sortProducts} from '../helpers';

const query = (type: ProductFetchType) => {
  return stripIndent(`
  query fetchProducts(${outer(type)}) {
    products(${inner(type)}) {
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
};

const outer = (type: ProductFetchType) => {
  return `$first: Int!, $${type}: String, $after: String`;
};

const inner = (type: ProductFetchType) => {
  return `first: $first, after:$after, where: {${type}: $${type}}, orderBy: ${
    type === 'productType' || type === 'brand' ? 'rating_DESC' : 'price_ASC'
  }`;
};

type Response = {
  data: {
    products: Product[];
  };
};

interface LooseObject {
  [key: string]: any;
}

export const fetchProducts = async (
  type: ProductFetchType,
  first: number,
  value: string,
  after?: string,
): Promise<Product[]> => {
  const variables: LooseObject = {first: first, after: after};
  variables[type] = value;
  const response = await GraphQLNetworkManager.request<Response>(
    query(type),
    variables,
  );
  const products = response.data.products ?? [];

  if (type === 'category') return products;
  return sortProducts(products, type === 'productType' ? 'DESC' : 'ASC');
};
