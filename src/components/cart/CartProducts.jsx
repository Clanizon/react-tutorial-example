import { useStoreState } from "easy-peasy";
import React from "react";
import { Container } from "shards-react";
import NoProductsFound from "./NoProductsFound";
import ProductCardList from "./ProductCardList";

export default function CartProducts() {
  const productList = useStoreState((store) => store.products.items);
  const showProductList = () => {
    if (productList && productList.length > 0) {
      return <ProductCardList products={productList} />;
    } else {
      return <NoProductsFound />;
    }
  };
  return <Container fluid>{showProductList()}</Container>;
}
