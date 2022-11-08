import React from "react";
import styled from "styled-components";

const CgIContainer = styled.div`
  flex: 1;
  margin: 30px;
  position: relative;
`;

const CgImg = styled.img`
  width: 100%;
`;

const CgInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 20px;
`;

const CgTitle = styled.h1`
  color: #2f3542;
  margin-bottom: 10px;
`;

const CgButton = styled.button`
  border: 0.5px solid #fff;
  outline: none;
  padding: 8px 10px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #57606f;
  }
`;

function CategoryItem({ item }) {
  return (
    <CgIContainer>
      <CgImg src={item.img} />
      <CgInfo>
        <CgTitle>{item.title}</CgTitle>
        <CgButton>Shop Now</CgButton>
      </CgInfo>
    </CgIContainer>
  );
}

export default CategoryItem;
