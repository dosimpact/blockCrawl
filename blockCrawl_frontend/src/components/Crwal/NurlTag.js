import React from "react";
import useInput from "../../hooks/useInput";
import Section from "../../components/Section";
import styled from "styled-components";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";
import Loader from "../Loader";

const N_URL_TAG = gql`
  query NurlTagQuery($tag: String!, $urls: [String!]!) {
    NurlTag(tag: $tag, urls: $urls)
  }
`;

const ItemList = ({ num, item }) => {
  return (
    <div>
      {num} . : {item}
    </div>
  );
};

export default () => {
  const [getNurlTag, { loading, data }] = useLazyQuery(N_URL_TAG);
  const urlsInput = useInput(
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=187321\n" +
      "https://movie.naver.com/movie/bi/mi/basic.nhn?code=134963\n" +
      "https://movie.naver.com/movie/bi/mi/basic.nhn?code=193839\n" +
      "https://movie.naver.com/movie/bi/mi/basic.nhn?code=182042\n" +
      "https://movie.naver.com/movie/bi/mi/basic.nhn?code=193214\n" +
      "https://movie.naver.com/movie/bi/mi/basic.nhn?code=183991\n" +
      "https://movie.naver.com/movie/bi/mi/basic.nhn?code=169665\n" +
      "https://movie.naver.com/movie/bi/mi/basic.nhn?code=188993\n" +
      "https://movie.naver.com/movie/bi/mi/basic.nhn?code=180369\n" +
      "https://movie.naver.com/movie/bi/mi/basic.nhn?code=190568\n"
  );
  const tagInput = useInput(
    "#content > div.article > div.mv_info_area > div.mv_info > h3 > a:nth-child(1)"
  );
  const submitBtn = async () => {
    console.log("submit");
    let urls = null;
    let tag = null;
    if (urlsInput.value) {
      urls = String(urlsInput.value).trim().split("\n");
      console.log(urls);
    }
    if (tagInput.value) {
      tag = String(tagInput.value);
    }
    getNurlTag({ variables: { tag, urls } });
  };
  return (
    <Wrapper>
      <Section name="NurlTag Components" className="nurltag__section">
        <h2 className="typo">URLS</h2>
        <TextArea className="nurltag__textarea" {...urlsInput}></TextArea>

        <h2 className="typo">TAGS</h2>
        <Input className="nurltag__input" type="text" {...tagInput}></Input>
        <Button className="nurltag__summit" onClick={submitBtn} text="OK" />
        {loading && <Loader />}
        {data &&
          data.NurlTag &&
          JSON.parse(data.NurlTag).map((e, idx) => (
            <ItemList key={idx} num={idx} item={e} />
          ))}
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
