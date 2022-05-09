import axios from 'axios';
import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { Product } from '../Home/OutfitCatalog/models/product';

export const ProductContext = createContext<any>({});

interface ProductContextProps {
  children: ReactNode;
}

const ProductContextProvider = ({ children }: ProductContextProps) => {
  const [products, setProducts] = useState<any>([]);
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout: any) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const getAllProducts = async () => {
    await axios
      .get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => (getAllProducts(), setRefreshing(false)));
  }, []);

  useEffect(() => {
    (async () => {
      await getAllProducts();
    })
  }, []);

  return (
    <ProductContext.Provider value={{ products, getAllProducts, onRefresh, refreshing }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
