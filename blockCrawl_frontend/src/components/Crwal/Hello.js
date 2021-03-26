import React from "react";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../Loader";

const Hello = gql`
  query HelloQuery {
    naverDust
  }
`;

export default () => {
  const { loading, error, data } = useQuery(Hello);
  return (
    <div>
      <h2>Hello Test</h2>
      {loading ? <Loader /> : <div> {JSON.stringify(data)} </div>}
    </div>
  );
};
