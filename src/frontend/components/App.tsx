import React, { FC, useState } from "react";
import { GridContainer, ListContainer } from "./templates";
import { Product } from "./molecules/ProductItem/types";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { SelectorPages } from "./molecules/SelectorPages/SelectorPages";

export type AppProps = {};

export const App: FC<AppProps> = () => {
  const [listProductsFiltered, setListProductsFiltered] = useState<string | null>(null);
  const { listProducts, currentPage, totalPagesInResults, handlePageChange } = useFetchProducts();
  const filteredProducts = listProductsFiltered ? listProducts.filter((product: Product) => product.title?.toLowerCase().includes(listProductsFiltered.toLowerCase())) : listProducts;
  return (
    <main>
      <GridContainer>
        <ListContainer
          listProducts={filteredProducts}
          setListProductsFiltered={setListProductsFiltered}
        />
        <SelectorPages
          currentPage={currentPage}
          totalPagesInResults={totalPagesInResults}
          handlePageChange={handlePageChange}
        />
      </GridContainer>
    </main>
  );
};
