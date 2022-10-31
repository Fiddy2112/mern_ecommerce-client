import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #70a1ff;
  color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15px;
  font-weight: 400;
`;

function Notification() {
  return <Container>Super deals! 10% off when you buy online today</Container>;
}

export default Notification;
