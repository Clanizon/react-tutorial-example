import React from "react";
import { Col, Container, Row } from "shards-react";
import ProductCard from "./ProductCard";

export default function ProductCardList(props) {
  return (
    <>
      <Container fluid>
        <Col lg={12} sm={3}>
          <Row>
            {props.products.map((product, index) => {
              return <ProductCard key={index} info={product} />;
            })}
          </Row>
        </Col>
      </Container>
    </>
  );
}
