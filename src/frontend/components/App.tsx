import React, { FC, useState } from "react";
import { GridContainer, ListContainer } from "./templates";
import { Product } from "./molecules/ProductItem/types";
import { useFetchProducts } from "../../hooks/useFetchProducts";

export type AppProps = {};

export const App: FC<AppProps> = () => {
  const [listProductsFiltered, setListProductsFiltered] = useState<string | null>(null);
  const listProducts = useFetchProducts();
  const filteredProducts = listProductsFiltered ? listProducts.filter((product: Product) => product.title?.toLowerCase().includes(listProductsFiltered.toLowerCase())) : listProducts;
  return (
    <main>
      <GridContainer>
        <ListContainer listProducts={filteredProducts} setListProductsFiltered={setListProductsFiltered}/>
      </GridContainer>
    </main>
  );
};
