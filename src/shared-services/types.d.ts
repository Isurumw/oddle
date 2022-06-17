declare interface IStorage {
  get(key: string): Promise<string | null>;
  getObject<P>(key: string): Promise<P | null>;
  set(key: string, value: string): Promise<void>;
  remove(key: string): void;
}

declare interface INetworkManager {
  request(
    query: string,
    variables?: object | null,
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH',
  ): any;
}

declare type Product = {
  id: string;
  name?: string;
  description?: string;
  rating?: number;
  price?: string;
  brand?: string;
  tagList: string[];
  category?: string;
  productType?: string;
  apiFeaturedImage?: string;
  websiteLink?: string;
  productLink?: string;
};

declare type FavoriteIdObject = {
  id: string;
  liked: boolean;
};

type ProductFetchType = 'productType' | 'brand' | 'category';
