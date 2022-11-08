import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(225, 225, 225, 0.1),
      rgba(225, 225, 225, 0.1)
    ),
    url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGNsb3RoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 80%;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: #2f3542;
`;
const Form = styled.form`
  flex: 1;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormItem = styled.label`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  padding-bottom: 5px;
  font-size: 15px;
  font-weight: 400;
  color: #2f3542;
`;
const Input = styled.input`
  width: 80%;
  padding: 10px 8px;
  outline: none;
  border: 0.5px solid #a4b0be;

  &:focus {
    border: 0.5px solid #1e90ff;
    // border: 0.5px solid #ff6b81;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #ff6b81;
  padding: 8px 50px;
`;

const Button = styled.button`
  // flex: 2;
  width: 50%;
  // margin: auto;
  border: 0.5px solid #ff6b81;
  outline: none;
  color: #ff6b81;
  background-color: #fff;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 6px;
  cursor: pointer;
  &:hover,
  &:hover ${Link} {
    color: #fff;
    background-color: #ff6b81;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 0.5px solid #ced6e0;
`;
const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #57606f;
  margin: 20px 10px;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>Login</Title>
          <FormItem>
            <Label>Email</Label>
            <Input placeholder="Email" />
          </FormItem>

          <FormItem>
            <Label>Password</Label>
            <Input placeholder="Password" />
          </FormItem>

          <Button>Log in</Button>
        </Form>
        <TitleContainer>
          <Title>You don't have an account?</Title>
          <Desc>Create an account and get a coupon</Desc>
          <Button>
            <Link href="/signup">Create account</Link>
          </Button>
        </TitleContainer>
      </Wrapper>
    </Container>
  );
}

export default Login;
