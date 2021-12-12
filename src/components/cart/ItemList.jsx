import React from "react";
import { ListGroup, ListGroupItem } from "shards-react";

export default function ItemList(props) {
  return (
    <>
      <ListGroup>
        {props.items.map((item, index) => (
          <ListGroupItem key={index}>
            {item.name}- Rs.{item.price}
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}
