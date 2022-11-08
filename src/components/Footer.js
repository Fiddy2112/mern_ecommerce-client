import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const FooterContainer = styled.div`
  padding: 20px;
  background-color: #2f3542;
`;
const FooterTop = styled.div`
  padding-bottom: 20px;
`;

const Logo = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #ff6b81;
`;
const Desc = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #747d8c;
`;

const FooterCenter = styled.div`
  margin: 20px 0px;
`;
const List = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #a4b0be;
`;
const Link = styled.a`
  display: flex;
  text-align: center;
  text-decoration: none;
  color: #747d8c;
  padding: 8px 5px;
  cursor: pointer;
  &:hover {
    color: #57606f;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 0px;
  border-top: 0.5px solid #57606f;
`;

const FooterTitle = styled.div`
  color: #747d8c;
  font-size: 14px;
  font-weight: 400;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;
const SocialIcon = styled.div`
  cursor: pointer;
  font-size: 20px;

  &:hover {
    font-size: 25px;
  }

  &:nth-child(1) {
    color: #3742fa;
  }

  &:nth-child(2) {
    color: #ff6b81;
  }

  &:nth-child(3) {
    color: #1e90ff;
  }

  &:nth-child(4) {
    color: #ff4757;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <Logo>E-COMMERCE APP</Logo>
        <Desc>Meet your style !</Desc>
      </FooterTop>
      <FooterCenter>
        <List>
          <ListItem>
            <Title>Page</Title>
            <Link href="/">Home</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/product">Product</Link>
          </ListItem>
          <ListItem>
            <Title>Fashion</Title>
            <Link href="#">Man Fashion</Link>
            <Link href="#">Woman Fashion</Link>
          </ListItem>
          <ListItem>
            <Title>Contact</Title>
            <Link>
              <LocationOnOutlinedIcon />
              655 dadadwaf, Bhbdwbdwbdwy
            </Link>
            <Link>
              <PhoneIphoneOutlinedIcon />
              +84868485548
            </Link>
            <Link style={{ textDecoration: "underline" }}>
              contact@ecommerce_app.vn
            </Link>
          </ListItem>

          <ListItem>
            <Title>My account</Title>
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign up</Link>
          </ListItem>
          <ListItem>
            <Title>Wishlist</Title>
          </ListItem>
          <ListItem>
            <Title>Terms</Title>
          </ListItem>
        </List>
      </FooterCenter>
      <FooterBottom>
        <FooterTitle>
          Copyright © UNIQLO Co., Ltd. All rights reserved
        </FooterTitle>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <YouTubeIcon />
          </SocialIcon>
        </SocialContainer>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
