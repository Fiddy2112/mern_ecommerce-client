import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartContainer = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  border-top: 0.5px solid #ced6e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: #2f3542;
  margin-bottom: 10px;
`;

const CartList = styled.div`
  flex: 2;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;
const CartItem = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 320px;
  height: 320px;
`;

const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartTitle = styled.div``;

const CartDesc = styled.div``;

const CartProduct = styled.div``;

const CartColor = styled.div``;

const CartSize = styled.div``;

const CartPrice = styled.span``;

const CartAmount = styled.div``;

const Filter = styled.div``;

const FilterText = styled.div``;

const Select = styled.select``;

const Option = styled.option``;

const AmountProduct = styled.div``;

const Amount = styled.div``;

const AmountTitle = styled.div``;

const AmountContainer = styled.div``;

const Shipping = styled.div``;

const TotalAmount = styled.div`
  flex: 1;
`;

const Subtotal = styled.div``;

const EstimatedTax = styled.div``;

const OrderTotal = styled.div``;

function Cart() {
  return (
    <CartContainer>
      <Navbar />
      <Title>Shopping cart</Title>
      <Wrapper>
        <CartList>
          <CartItem>
            <Img src="https://image.uniqlo.com/UQ/ST3/us/imagesgoods/449890/item/usgoods_69_449890.jpg?width=320" />
            <CartInfo>
              <CartTitle>Wool Cashmere Chesterfield Coat</CartTitle>
              <CartDesc>
                <CartProduct>449890</CartProduct>
                <CartColor>69 navay</CartColor>
                <CartSize>Unisex M</CartSize>
                <CartPrice>$199.90</CartPrice>
              </CartDesc>
            </CartInfo>
          </CartItem>
          <CartAmount>
            <Filter>
              <FilterText>
                Quantity
                <Select>
                  <Option>1</Option>
                  <Option>2</Option>
                  <Option>3</Option>
                  <Option>4</Option>
                  <Option>5</Option>
                  <Option>6</Option>
                  <Option>7</Option>
                  <Option>8</Option>
                  <Option>9</Option>
                  <Option>10</Option>
                </Select>
              </FilterText>
            </Filter>
            <AmountProduct>
              Subtotal:
              <Amount>$222</Amount>
            </AmountProduct>
          </CartAmount>
        </CartList>
        <TotalAmount>
          <AmountTitle>Order summary 4 Item(s)</AmountTitle>
          <AmountContainer>
            <Shipping>GHN</Shipping>
            <Subtotal>$453</Subtotal>
            <EstimatedTax>GHN</EstimatedTax>
          </AmountContainer>
          <OrderTotal>$453</OrderTotal>
        </TotalAmount>
      </Wrapper>
      <Footer />
    </CartContainer>
  );
}

export default Cart;
