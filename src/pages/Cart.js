import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartContainer = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  border-top: 0.5px solid #ced6e0;
  display: flex;
  // align-items: center;
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
  width: 160px;
  height: 160px;
`;

const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const CartTitle = styled.h3`
  font-weight: 400;
  color: #2f3542;
`;

const CartDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 5px;
  color: #57606f;
`;

const CartProduct = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

const CartColor = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

const CartSize = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

const CartPrice = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #2f3542;
`;
const Button = styled.button`
  margin-top: 5px;
  padding: 5px;
  width: 30%;
  outline: none;
  border-radius: 5px;
  border: 0.5px solid #ff6b81;
  color: #ff6b81;
  background-color: #fff;
  &:hover {
    color: #fff;
    background-color: #ff6b81;
  }
`;

const CartAmount = styled.div`
  margin-right: 30px;
`;

const FilterText = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #57606f;
`;

const Select = styled.select`
  padding: 5px 6px;
  font-weight: 400;
  font-size: 14px;
  margin-left: 5px;
  margin-bottom: 10px;
  outline: none;
`;

const Option = styled.option``;

const AmountProduct = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #57606f;
`;

const Amount = styled.span`
  font-weight: bold;
  color: #2f3542;
`;

const TotalAmount = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Total = styled.div`
  padding: 20px;
  background-color: #f1f2f6;
  border-radius: 5px;
`;
const TitleTotal = styled.div``;
const TitleAmount = styled.h3`
  padding-bottom: 20px;
  border-bottom: 0.5px solid #a4b0be;
`;

const TitlePrice = styled.h3`
  padding-top: 20px;
  border-top: 0.5px solid #a4b0be;
`;

const ItemAmount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0px;
`;
const Item = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #57606f;
`;

const Desc = styled.p`
  margin: 20px;
  font-weight: 400;
  color: #2f3542;
`;
const ButtonAmount = styled.button`
  padding: 15px;
  // margin: auto;
  outline: none;
  color: #ff6b81;
  border-radius: 5px;
  border: 0.5px solid #ff6b81;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #ff6b81;
    color: #fff;
  }
`;

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
                <CartProduct>Product ID: 449890</CartProduct>
                <CartColor>Color: 69 navay</CartColor>
                <CartSize>Size: Unisex M</CartSize>
                <CartPrice>$199.90</CartPrice>
              </CartDesc>
              <Button>Remove</Button>
            </CartInfo>
          </CartItem>
          <CartAmount>
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

            <AmountProduct>
              Subtotal:<Amount>$199.90</Amount>
            </AmountProduct>
          </CartAmount>
        </CartList>

        <CartList>
          <CartItem>
            <Img src="https://image.uniqlo.com/UQ/ST3/us/imagesgoods/449890/item/usgoods_69_449890.jpg?width=320" />
            <CartInfo>
              <CartTitle>Wool Cashmere Chesterfield Coat</CartTitle>
              <CartDesc>
                <CartProduct>Product ID: 449890</CartProduct>
                <CartColor>Color: 69 navay</CartColor>
                <CartSize>Size: Unisex M</CartSize>
                <CartPrice>$199.90</CartPrice>
              </CartDesc>
              <Button>Remove</Button>
            </CartInfo>
          </CartItem>
          <CartAmount>
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

            <AmountProduct>
              Subtotal:<Amount>$199.90</Amount>
            </AmountProduct>
          </CartAmount>
        </CartList>

        <CartList>
          <CartItem>
            <Img src="https://image.uniqlo.com/UQ/ST3/us/imagesgoods/449890/item/usgoods_69_449890.jpg?width=320" />
            <CartInfo>
              <CartTitle>Wool Cashmere Chesterfield Coat</CartTitle>
              <CartDesc>
                <CartProduct>Product ID: 449890</CartProduct>
                <CartColor>Color: 69 navay</CartColor>
                <CartSize>Size: Unisex M</CartSize>
                <CartPrice>$199.90</CartPrice>
              </CartDesc>
              <Button>Remove</Button>
            </CartInfo>
          </CartItem>
          <CartAmount>
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

            <AmountProduct>
              Subtotal:<Amount>$199.90</Amount>
            </AmountProduct>
          </CartAmount>
        </CartList>
        <TotalAmount>
          <Total>
            <TitleTotal>
              <TitleAmount>Order summary</TitleAmount>
              <ItemAmount>
                <Item>Item(s) subtotal</Item>
                <Item>Item(s) subtotal</Item>
                <Item>Item(s) subtotal</Item>
              </ItemAmount>
              <TitlePrice>Order summary</TitlePrice>
            </TitleTotal>
          </Total>
          <Desc>
            Your order qualifies for free standard shipping. Click "Checkout" to
            reserve Cart contents for 60 minutes.
          </Desc>
          <ButtonAmount>Checkout</ButtonAmount>
        </TotalAmount>
      </Wrapper>
      <Footer />
    </CartContainer>
  );
}

export default Cart;
