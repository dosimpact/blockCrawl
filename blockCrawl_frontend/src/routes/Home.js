import React, { useState } from "react";
import styled from "styled-components";
import { NurlTag, UrlTag, UrlCapture, UrlPDF } from "../components/Crwal";

const Name = ["NurlTag", "UrlTag", "urlCapture", "urlPDF"];

const ListItem = ({ name, event }) => {
  return (
    <SListItem onClick={event}>
      <span>{name}</span>
    </SListItem>
  );
};

const Home = () => {
  const [selection, setSelection] = useState(0);

  return (
    <HomeContainer>
      <List>
        {Name.map((n, i) => (
          <ListItem
            name={n}
            event={() => {
              setSelection(i);
            }}
          />
        ))}
      </List>
      {selection === 0 && <NurlTag />}
      {selection === 1 && <UrlTag />}
      {selection === 2 && <UrlCapture />}
      {selection === 3 && <UrlPDF />}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  padding: 20px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
`;
const SListItem = styled.li`
  font-size: 20px;
  cursor: pointer;
  margin: 10px;
  color: ${(props) => props.theme.pupleColor};
  :hover {
    color: ${(props) => props.theme.MintColor};
  }
`;
