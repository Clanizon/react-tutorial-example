import { useStoreState } from "easy-peasy";
import React, { useState } from "react";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Popover,
  PopoverBody,
  PopoverHeader,
} from "shards-react";
import ItemList from "./ItemList";
import NoProductsFound from "./NoProductsFound";

export default function CartHeader(props) {
  const [open, setOpen] = useState(false);
  const basketItems = useStoreState((state) => state.basket.productsInBasket);

  const toggle = () => {
    setOpen(!open);
  };
  const renderItems = () => {
    if (basketItems.length > 0) {
      return <ItemList items={basketItems}></ItemList>;
    } else {
      return <NoProductsFound />;
    }
  };
  return (
    <>
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand href="#">{props.title}</NavbarBrand>
        <NavbarToggler />
        <Collapse open={false} navbar>
          <Nav navbar></Nav>
        </Collapse>
        <Nav navbar className="ml-auto">
          {/* <Badge theme="light">Cart {basketItems.length}</Badge> */}
          <Button id="popover" onClick={() => toggle()}>
            Cart {basketItems.length}
          </Button>
          <Popover
            placement="bottom"
            open={open}
            toggle={() => toggle()}
            target="#popover"
          >
            <PopoverHeader>Cart Items</PopoverHeader>
            <PopoverBody>{renderItems()}</PopoverBody>
          </Popover>
        </Nav>
      </Navbar>
    </>
  );
}
