import React from "react";
import styled from "styled-components";

const CgIContainer = styled.div`
  flex: 1;
`;

const CgIWrapper = styled.div``;

const CgImg = styled.img``;

const CgInfo = styled.div``;

const CgTitle = styled.h1``;

const CgButton = styled.div``;

function CategoryItem({ item }) {
  return (
    <CgIContainer>
      <CgIWrapper>
        <CgImg src={item.img} />
        <CgInfo>
          <CgTitle>img</CgTitle>
          <CgButton></CgButton>
        </CgInfo>
      </CgIWrapper>
    </CgIContainer>
  );
}

export default CategoryItem;
