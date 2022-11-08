import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ProductInfo = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  gap: 20px;
  transition: all 0.5 ease;
`;

const ProductContainer = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ced6e0;
  position: relative;

  &:hover ${ProductInfo} {
    opacity: 0.9;
  }
`;

const ProductImage = styled.img`
  height: 75%;
  z-index: 9;
`;

const Icon = styled.div`
  color: #ff6b81;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0.5px solid #ff6b81;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #ff6b81;
  }
`;

function ProductItem({ item }) {
  return (
    <ProductContainer>
      <ProductImage src={item.img} />
      <ProductInfo>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>{" "}
        <Icon>
          <SearchOutlinedIcon />
        </Icon>{" "}
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </ProductInfo>
    </ProductContainer>
  );
}

export default ProductItem;
