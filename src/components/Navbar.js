import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";

const NavbarContainer = styled.div`
  height: 60px;
  background-color: #fff;

  ${mobile({ height: "50px" })}
`;

const NavbarWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const NavbarLeft = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-size: 16px;
  font-weight: 500;
  ${mobile({ fontSize: "14px", fontWeight: "none" })}
`;

const Link = styled.a`
  text-decoration: none;
  color: #ff6b81;
  cursor: pointer;
  &:hover {
    color: #ff4757;
  }
`;

const NavbarCenter = styled.div`
  flex: 1;
`;

const NavSearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 0.5px solid #a4b0be;
  max-width: 350px;
  border-radius: 10px;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  color: #747d8c;
  font-size: 20px;
  &:hover {
    color: #ff6b81;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const NavLanguage = styled.span`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0px 5px;
  color: #57606f;
  ${mobile({ display: "none" })}
`;

const NavItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #57606f;
  cursor: pointer;
  margin-left: 15px;
  padding: 0px 5px;
  &:hover {
    color: #ff6b81;
  }
  ${mobile({ fontSize: "12px" })}
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLeft>
          <Logo>
            <Link href="/">E-COMMERCE APP</Link>
          </Logo>
        </NavbarLeft>
        <NavbarCenter>
          <NavSearchContainer>
            <Input placeholder="Search" />
            <Icon>
              <SearchOutlinedIcon />
            </Icon>
          </NavSearchContainer>
        </NavbarCenter>
        <NavbarRight>
          <NavLanguage>EN</NavLanguage>
          <NavItem>Sign Up</NavItem>
          <NavItem>Sign In</NavItem>
          <NavItem>
            {" "}
            <Badge badgeContent={4} color="error">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </NavItem>
        </NavbarRight>
      </NavbarWrapper>
    </NavbarContainer>
  );
}

export default Navbar;
