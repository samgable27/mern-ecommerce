import React from "react";
import { Container } from "../styles/productStyles";
import { popularProducts } from "../data";
import Product from "./Product";
import { ProductProps } from "../types/styledTypes";

const Products: React.FC<ProductProps> = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
