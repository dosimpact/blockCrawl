import axios from "axios";
import key from "./config/key";

const config = {
  method: "POST",
  url: key.SERVER_URI,
  headers: {
    "Content-Type": "application/json",
  },
};

export const CrwalingAPI = {
  urlTagAPI: ({ url, tag }) =>
    axios({
      ...config,
      data: urlTagAPIData({ url, tag }),
    }),

  urlCaptureAPI: ({ url }) =>
    axios({
      ...config,
      data: urlCaptureAPIData({ url }),
    }),
  urlPDFAPI: ({ url }) =>
    axios({
      ...config,
      data: urlPDFAPIData({ url }),
    }),
  urlNTagAPI: ({ url, tags }) =>
    axios({
      ...config,
      url: `${key.SERVER_URI}api/basecrawl/urlNTag`,
      data: urlNTagData({ url, tags }),
    }),
};

const urlTagAPIData = ({ url, tag }) => {
  return JSON.stringify({
    query: `query {
      urlTag(
        tag: "${tag}"
        url: "${url}"
      )
    }`,
  });
};

const urlCaptureAPIData = ({ url }) => {
  return JSON.stringify({
    query: `query{
      urlCapture(url:"${url}")
    }`,
  });
};

const urlPDFAPIData = ({ url }) => {
  return JSON.stringify({
    query: `query{
      urlPDF(url:"${url}")
    }
    `,
  });
};

const urlNTagData = ({ url, tags }) => {
  return JSON.stringify({
    url,
    tags,
  });
};
/**
 * var data = JSON.stringify(
 * {"url":
 * "https://movie.naver.com/movie/bi/mi/basic.nhn?code=134824","
 * tags":[
 * "#content > div.article > div.mv_info_area > div.mv_info > h3 > a:nth-child(1)",
 * "#content > div.article > div.section_group.section_group_frst > div:nth-child(1) > div > div > h5",
 * "#content > div.article > div.section_group.section_group_frst > div:nth-child(1) > div > div > p"
 * ]});

 */
