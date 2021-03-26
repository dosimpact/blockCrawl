import React from "react";
import styled from "styled-components";

export default ({ content }) => {
  return <Container>{content}</Container>;
};

const Container = styled.div`
  border: 0;
  color: ${(props) => props.theme.darkColor};
  min-width: 50px;
`;
