import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  margin: 20px;
`;

// return : now mouse hovering > node,selector
const useDocumentSelect = () => {
  const [sel, SetSel] = useState("");
  const [action, setAction] = useState("noraml");
  useEffect(() => {
    const handleEnter = (e) => {
      if (e && e.target && e.target.style) {
        e.target.style.opacity = 0.1;
        SetSel(e.target.innerHTML);
      }
    };

    const handleLeave = (e) => {
      if (e && e.target && e.target.style) {
        e.target.style.opacity = 1;
      }
    };

    if (action === "selecting") {
      document.addEventListener("mouseover", handleEnter);
      document.addEventListener("mouseout", handleLeave);
    }
    return () => {
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, [action]);

  return { selector: sel, action, setAction };
};

const Info = () => {
  const { action, selector, setAction } = useDocumentSelect();
  return (
    <InfoContainer>
      <div>{`now selector : ${selector}`}</div>
      <div>{`now mode : ${
        action === "selecting" ? `selecting` : `noraml`
      }`}</div>
      <button onClick={() => setAction("selecting")}>selecting Mode</button>
      <button onClick={() => setAction("normal")}>normal Mode</button>
      <br />
      <iframe
        title="Backend"
        src="http://localhost:4000/"
        height="1000px"
        width="80%"
      ></iframe>
    </InfoContainer>
  );
};

export default Info;
