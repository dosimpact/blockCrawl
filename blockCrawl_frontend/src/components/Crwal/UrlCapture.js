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
  query urlCaptureQuery($url: String!) {
    urlCapture(url: $url)
  }
`;

export default () => {
  const [getUrlCapture, { loading, data }] = useLazyQuery(N_URL_TAG);
  const urlInput = useInput("https://www.instagram.com/?hl=en");

  const submitBtn = async () => {
    let url = null;
    if (urlInput.value) {
      url = String(urlInput.value);
    }
    await getUrlCapture({
      variables: {
        url,
      },
    });
  };

  const handleGetImage = (src) => {
    console.log("handleGetImage", src);
    const downloaderTag = document.createElement("iframe");
    // const BASE_URL = "http://localhost:4000/download/";
    downloaderTag.src = src;
    downloaderTag.style.display = "none";
    console.log("donwload start...", src);
    document.body.appendChild(downloaderTag);
  };

  return (
    <Wrapper>
      <Section name="Screenshot WebSite" className="urlcapture__section">
        <h2 className="typo">URL</h2>
        <Input className="urlcapture__input" type="text" {...urlInput}></Input>
        <Button className="urlcapture__summit" onClick={submitBtn} text="OK" />
        <h2 className="typo">result</h2>
        {loading && <Loader />}
        {console.log(data)}

        {data ? (
          <>
            <img
              alt="result_img"
              src={`${key.SERVER_URI}${data?.urlCapture}`}
              //src={"http://localhost:4000/Instagram_1590330674608.png"}
              width="400px"
              height="200px"
            />
            <Button
              text={"GET IMAGE"}
              className="urlcapture__summit"
              onClick={() =>
                handleGetImage(`${key.SERVER_URI}download/${data?.urlCapture}`)
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
