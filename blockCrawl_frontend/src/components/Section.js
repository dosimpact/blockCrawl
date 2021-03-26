import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  background-color: ${(props) => props.theme.lightGrayColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid ${(props) => props.theme.lightPupleColor};
  font-size: 15px;
  transition: all 0.5s ease-in-out;
  :hover {
    border: 3px solid ${(props) => props.theme.lightMintColor};
    .Section__Name {
      border-bottom: 3px solid ${(props) => props.theme.lightMintColor};
    }
  }
  .Section__Name {
    font-size: 30px;
    font-weight: 600;
    margin: 30px;
    transition: all 0.5s ease-in-out;
    border-bottom: 3px solid ${(props) => props.theme.lightPupleColor};
  }
`;

export default ({ name, children, className }) => {
  return (
    <SectionContainer className={className}>
      <h1 className="Section__Name">{name}</h1>
      {children}
    </SectionContainer>
  );
};
