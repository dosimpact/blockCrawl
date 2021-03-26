import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 0;
  color: white;
  background-color: ${(props) => props.theme.lightPupleColor};
  border-radius: 4px;
  padding: 5px;
`;

export default ({
  placeholder,
  className,
  required,
  value,
  onChange,
  type,
}) => {
  return (
    <Container
      placeholder={placeholder}
      className={className}
      required={required}
      value={value}
      onChange={onChange}
      type={type}
    ></Container>
  );
};
