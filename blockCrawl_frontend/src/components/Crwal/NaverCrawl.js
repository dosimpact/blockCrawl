import React, { useEffect, useState } from "react";
import { CrwalingApi } from "../../api";
import Loader from "../Loader";

export default () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchDataAPI = async () => {
      try {
        const { data } = await CrwalingApi.naverDust();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAPI();

    return () => {};
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    if (error) {
      return (
        <>
          <h1>NAVER CRWALING Fail</h1>
        </>
      );
    } else {
      return (
        <>
          <h1>NAVER CRWALING</h1>
          <div>{JSON.stringify(data)}</div>
          <h2>{data.result}</h2>
          <h2>{data.data}</h2>
        </>
      );
    }
  }
};
