import { useStoreActions } from "easy-peasy";
import React from "react";
import { Button, Card, CardBody, CardImg, CardTitle } from "shards-react";

export default function ProductCard(props) {
  const addToCart = useStoreActions(
    (action) => action.basket.addProductToBasket
  );
  return (
    <>
      <Card style={{ maxWidth: "300px" }} className="m-2">
        <CardImg className="w-5 h-5" src={props.info.imgUrl} />
        <CardBody>
          <CardTitle>{props.info.name}</CardTitle>
          <p>Rs.{props.info.price}</p>
          <Button onClick={() => addToCart(props.info)}>Add to cart</Button>
        </CardBody>
      </Card>
    </>
  );
}
