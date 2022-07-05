import React, {useState, createContext, useContext} from 'react';

interface SharedProviderProps {
  children: React.ReactNode;
}

export interface ISharedContext {
  favoriteIdObjects: FavoriteIdObject[];
  setFavoriteIdObjects: Function;
  productTypes: string[];
  setProductTypes: Function;
  productBrands: string[];
  setProductBrand: Function;
  productCategories: string[];
  setProductCategories: Function;
  favoriteProducts: Product[];
  setFavoriteProducts: Function;
}

const SharedContext = createContext<ISharedContext>({
  favoriteIdObjects: [],
  setFavoriteIdObjects: Function,
  productTypes: [],
  setProductTypes: Function,
  productBrands: [],
  setProductBrand: Function,
  productCategories: [],
  setProductCategories: Function,
  favoriteProducts: [],
  setFavoriteProducts: Function,
});

export const SharedProvider = ({
  children,
}: SharedProviderProps): JSX.Element => {
  const [favoriteIdObjects, setFavoriteIdObjectsState] = useState<
    FavoriteIdObject[]
  >([]);
  const [productTypes, setProductTypesState] = useState<string[]>([]);
  const [productBrands, productBrandsState] = useState<string[]>([]);
  const [productCategories, setProductCategoriesState] = useState<string[]>([]);
  const [favoriteProducts, setFavoriteProductsState] = useState<Product[]>([]);

  const setFavoriteIdObjects = (objects: FavoriteIdObject[]) => {
    setFavoriteIdObjectsState(objects);
  };

  const setProductTypes = (types: string[]) => {
    setProductTypesState(types);
  };

  const setProductBrand = (brands: string[]) => {
    productBrandsState(brands);
  };

  const setProductCategories = (categories: string[]) => {
    setProductCategoriesState(categories);
  };

  const setFavoriteProducts = (product: Product[]) => {
    setFavoriteProductsState(product);
  };

  return (
    <SharedContext.Provider
      value={{
        favoriteIdObjects,
        setFavoriteIdObjects,
        productTypes,
        setProductTypes,
        productBrands,
        setProductBrand,
        productCategories,
        setProductCategories,
        favoriteProducts,
        setFavoriteProducts,
      }}>
      {children}
    </SharedContext.Provider>
  );
};

export const useShared = (): ISharedContext => {
  const context = useContext(SharedContext);

  // force hook to be used within AlertProvider
  if (context === undefined) {
    throw new Error('use-shared must be used within a shared-provider');
  }

  return context;
};
