import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content;space-between;
  
`;

function Products() {
  return (
    <ProductsContainer>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </ProductsContainer>
  );
}

export default Products;
