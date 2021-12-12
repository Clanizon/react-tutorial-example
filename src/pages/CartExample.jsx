import { action, createStore, StoreProvider } from "easy-peasy";
import React from "react";
import CartHeader from "../components/cart/CartHeader";
import CartProducts from "../components/cart/CartProducts";
const products = [
  {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
    name: "CHECK PRINT SHIRT",
    price: 110,
  },
  {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    name: "GLORIA HIGH LOGO SNEAKER",
    price: 91,
  },
  {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    name: "CATE RIGID BAG",
    price: 94.5,
  },
  {
    imgUrl:
      "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
    name: "GUESS CONNECT WATCH",
    price: 438.9,
  },
  {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    name: "'70s RETRO GLAM KEFIAH",
    price: 20,
  },
];
export default function CartExample() {
  const productModel = {
    items: products,
  };
  const basketModel = {
    productsInBasket: [],
    // 👇 Defining a "nested" action
    addProductToBasket: action((state, payload) => {
      state.productsInBasket.push(payload);
    }),
  };
  const store = createStore({
    products: productModel,
    basket: basketModel,
  });
  return (
    <>
      <StoreProvider store={store}>
        <CartHeader title="Cart example" />
        <CartProducts />
      </StoreProvider>
    </>
  );
}
