import React from "react";
import GlobalStyles from "./styles/Globalstyles";
import Router from "./components/Router";

import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyles />
        <ToastContainer position={"top-right"} />
      </ThemeProvider>
    </>
  );
}

export default App;
