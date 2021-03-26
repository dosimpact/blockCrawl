import { LOG_TYPES } from "./types";
import axios from "axios";

const BASE_URL = "http://localhost:4000/";

export const logIn = (token) => {
  console.log("redux action login token:", token);
  return {
    type: LOG_TYPES.LOG_IN,
    payload: { token },
  };
};

export const logOut = () => {
  return {
    type: LOG_TYPES.LOG_OUT,
  };
};

export const logUserSave = (token) => {
  if (!token) {
    return { type: null };
  }

  const data = JSON.stringify({
    query: `query whoami{
    me{
      id
      avatar
      name
      email
    }
  }`,
    variables: {},
  });

  const config = {
    method: "post",
    url: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const request = axios(config)
    .then(function (response) {
      return response.data.data.me;
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    type: LOG_TYPES.LOG_USER_SAVE,
    payload: request,
  };
};
