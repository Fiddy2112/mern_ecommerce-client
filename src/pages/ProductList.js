import React from "react";
import Navbar from "../components/Navbar";
import Notification from "../components/Notification";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Footer from "../components/Footer";
import styled from "styled-components";

const PLContainer = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  margin: 0px 10px;
  padding: 8px;
  border-radius: 5px;
`;
const Option = styled.option``;

function ProductList() {
  return (
    <PLContainer>
      <Navbar />
      <Notification />
      <Title>Hoodie</Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            Filter Products:
            <Select>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Gray</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>...</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>2XL</Option>
            </Select>
          </FilterText>
        </Filter>
        <Filter>
          <FilterText>
            Sort Products:
            <Select>
              <Option selected>Price</Option>
              <Option>asc</Option>
              <Option>dsc</Option>
            </Select>
          </FilterText>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </PLContainer>
  );
}

export default ProductList;
