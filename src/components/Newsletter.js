import React from "react";
import styled from "styled-components";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { mobile } from "../responsive";

const NlContainer = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    height: 50vh;
  }

  ${mobile({ height: "45vh" })}
`;
const NlTitle = styled.h1`
  font-size: 70px;
  color: #2f3542;
  margin: 20px;

  ${mobile({ fontSize: "50px" })}
`;

const NlDesc = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #57606f;

  ${mobile({ fontSize: "14px", textAlign: "center" })}
`;
const NlInputContainer = styled.div`
  width: 50%;
  height: 40px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({ width: "65%" })}
`;
const NlInput = styled.input`
  flex: 8;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 400;
  border: 0.5px solid #ff6b81;
  border-radius: 5px;
`;
const NlButton = styled.button`
  flex: 1;
  background-color: #fff;
  border: 0.5px solid #ff6b81;
  color: #ff6b81;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #ff6b81;
    color: #fff;
  }
`;

function Newsletter() {
  return (
    <NlContainer>
      <NlTitle>Newsletter</NlTitle>
      <NlDesc>Get timely updates from your favorite products!</NlDesc>
      <NlInputContainer>
        <NlInput placeholder="Your email" />
        <NlButton>
          <SendOutlinedIcon />
        </NlButton>
      </NlInputContainer>
    </NlContainer>
  );
}

export default Newsletter;
