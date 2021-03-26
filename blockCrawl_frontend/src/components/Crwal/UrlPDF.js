import React from "react";
import useInput from "../../hooks/useInput";
import Section from "../../components/Section";
import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";

import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";
import Loader from "../Loader";

import key from "../../config/key";

const N_URL_TAG = gql`
  query urlPDFQuery($url: String!) {
    urlPDF(url: $url)
  }
`;

export default () => {
  const [getUrlPDF, { loading, data }] = useLazyQuery(N_URL_TAG);
  const urlInput = useInput("https://www.instagram.com/?hl=en");

  const submitBtn = async () => {
    let url = null;
    if (urlInput.value) {
      url = String(urlInput.value);
    }
    await getUrlPDF({
      variables: {
        url,
      },
    });
  };

  const handleGetFile = (src) => {
    console.log("handleGetFile", src);
    const downloaderTag = document.createElement("iframe");
    // const BASE_URL = "http://localhost:4000/download/";
    downloaderTag.src = src;
    downloaderTag.style.display = "none";
    console.log("donwload start...", src);
    document.body.appendChild(downloaderTag);
  };

  return (
    <Wrapper>
      <Section name="WebSite convert PDF" className="urlcapture__section">
        <h2 className="typo">URL</h2>
        <Input className="urlcapture__input" type="text" {...urlInput}></Input>
        <Button className="urlcapture__summit" onClick={submitBtn} text="OK" />
        <h2 className="typo">result</h2>
        {loading && <Loader />}
        {console.log(data)}
        {data ? (
          <>
            <Button
              text={"GET PDF"}
              className="urlcapture__summit"
              onClick={() =>
                handleGetFile(`${key.SERVER_URI}download/${data?.urlPDF}`)
              }
            />
          </>
        ) : (
          ""
        )}
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 700px;
  & .urlcapture__section {
    padding: 20px;
  }
  & .urlcapture__input {
    width: 80%;
  }
  & .urlcapture__textarea {
    width: 80%;
    height: 200px;
  }
  & .typo {
    margin: 10px;
    text-transform: uppercase;
  }
  & .urlcapture__summit {
    margin-top: 20px;
    width: 100px;
    height: 50px;
  }
`;
