import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(225, 225, 225, 0.1),
      rgba(225, 225, 225, 0.1)
    ),
    url("https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: #2f3542;
`;
const Form = styled.form`
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
const InputBox = styled.input`
  width: 20px;
  height: 20px;
  margin: 5px;
`;
const Agreement = styled.span`
  font-size: 14px;
  color: #2f3542;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
const Desc = styled.span`
  font-size: 12px;
  color: #57606f;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  &:hover {
    color: #fff;
    background-color: #ff6b81;
  }
`;

const LinkContainer = styled.div`
  font-size: 14px;
  padding: 0px 10px;
  color: #57606f;
`;
const Link = styled.a`
  margin-left: 5px;
  color: #2f3542;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #ff6b81;
  }
`;

function Signup() {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <FormItem>
            <Label>Username</Label>
            <Input placeholder="Username" />
          </FormItem>

          <FormItem>
            <Label>Email</Label>
            <Input placeholder="Email" />
          </FormItem>

          <FormItem>
            <Label>Password</Label>
            <Input placeholder="Password" />
          </FormItem>

          <FormItem>
            <Label>Confirm Password</Label>
            <Input placeholder="Confirm Password" />
          </FormItem>

          <Agreement>
            <CheckBox>
              <InputBox type="checkbox" />I agree to E-COMMERCE TERMS OF USE and
              PRIVACY POLICY
            </CheckBox>
            <Desc>
              By creating an account, you agree to E-COMMERCE privacy policy and
              terms + conditions.
            </Desc>
          </Agreement>

          <ButtonContainer>
            <Button>Create</Button>
            <LinkContainer>
              You have an account?
              <Link href="/login">Login</Link>
            </LinkContainer>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Signup;
