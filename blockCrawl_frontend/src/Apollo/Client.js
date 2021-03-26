import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

import key from "../config/key";

export default new ApolloClient({
  uri: key.SERVER_URI,
  clientState: {
    defaults,
    resolvers,
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("LOGIN_TOKEN")}`,
  },
});
