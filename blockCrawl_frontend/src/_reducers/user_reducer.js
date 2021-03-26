import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  SAVE_SERVER,
} from "../_actions/types";

export default function (
  state = {
    token: localStorage.getItem("token"),
    isLoggedIn: !!localStorage.getItem("token"),
  },
  action
) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state };
    case SAVE_SERVER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
