import React from "react";
import useInput from "../../hooks/useInput";
import Section from "../../components/Section";
import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";

import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";
import Loader from "../Loader";

const N_URL_TAG = gql`
  query urlTagQuery($tag: String!, $url: String!) {
    urlTag(tag: $tag, url: $url)
  }
`;

export default () => {
  const [getUrlTag, { loading, data }] = useLazyQuery(N_URL_TAG);
  const urlInput = useInput(
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=187321"
  );
  const tagInput = useInput(
    "#content > div.article > div.mv_info_area > div.mv_info > h3 > a:nth-child(1)"
  );
  const submitBtn = async () => {
    console.log("submit");
    let url = null;
    let tag = null;
    if (urlInput.value) {
      url = String(urlInput.value);
    }
    if (tagInput.value) {
      tag = String(tagInput.value);
    }
    getUrlTag({ variables: { tag, url } });
  };
  return (
    <Wrapper>
      <Section name="urlTag Components" className="nurltag__section">
        <h2 className="typo">URL</h2>
        <Input className="nurltag__input" type="text" {...urlInput}></Input>
        <h2 className="typo">TAGS</h2>
        <Input className="nurltag__input" type="text" {...tagInput}></Input>
        <Button className="nurltag__summit" onClick={submitBtn} text="OK" />

        {loading && <Loader />}

        {data && data.urlTag && JSON.parse(data.urlTag)}
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 700px;
  & .nurltag__section {
    padding: 20px;
  }
  & .nurltag__input {
    width: 80%;
  }
  & .nurltag__textarea {
    width: 80%;
    height: 200px;
  }
  & .typo {
    margin: 10px;
  }
  & .nurltag__summit {
    margin-top: 20px;
  }
`;
