import React from "react";
import { categories } from "../data";

import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const CgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
function Categories() {
  return (
    <CgContainer>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </CgContainer>
  );
}

export default Categories;
