import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Notification from "../components/Notification";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

const PContainer = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const ImgProduct = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Tile = styled.h1`
  font-weight: 500;
  color: #2f3542;
`;
const Desc = styled.p`
  padding: 20px 0px;
  font-size: 16px;
  font-weight: 400;
  color: #747d8c;
`;
const Price = styled.span`
  font-size: 50px;
  font-weight: 400;
  color: #ff6b81;
`;

const FilterContainer = styled.div`
  width: 60%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #2f3542;
`;
const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 2px;
  border: 0.5px solid #ced6e0;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: 0px 5px;
`;
const FilterSize = styled.select`
  padding: 10px;
  margin-left: 5px;
  outline: none;
  border-radius: 5px;
`;
const FilterSizeOption = styled.option``;

const AddProductContainer = styled.div`
  width: 50%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  border-radius: 5px;
  border: 0.5px solid #ff6b81;
`;
const Icon = styled.div`
  color: #a4b0be;
  &:hover {
    color: #2f3542;
  }
`;
const Amount = styled.span`
  width: 35px;
  height: 35px;
  border-left: 0.5px solid #ff6b81;
  border-right: 0.5px solid #ff6b81;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;
const Button = styled.button`
  width: 100%;
  background-color: #fff;
  border: 0.5px solid #ff6b81;
  color: #ff6b81;
  padding: 10px 8px;
  margin: 20px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #ff6b81;
    color: #fff;
  }
`;

function Product() {
  return (
    <PContainer>
      <Navbar />
      <Notification />
      <Wrapper>
        <ImgContainer>
          <ImgProduct src="https://images.unsplash.com/photo-1536992266094-82847e1fd431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        </ImgContainer>
        <InfoContainer>
          <Tile>Title Product</Tile>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit
            amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip
          </Desc>
          <Price>$14</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="white" />
              <FilterColor color="black" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>2XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddProductContainer>
            <AmountContainer>
              <Icon>
                <RemoveCircleOutlineOutlinedIcon fontSize="large" />
              </Icon>
              <Amount>0</Amount>
              <Icon>
                <AddCircleOutlineOutlinedIcon fontSize="large" />
              </Icon>
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddProductContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </PContainer>
  );
}

export default Product;
