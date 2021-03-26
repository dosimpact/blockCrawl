import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { CSVLink } from "react-csv";

import { toast } from "react-toastify";

import { useFormik } from "formik";

const sampleData = `
https://finance.naver.com/item/sise_day.nhn?code=215600&page=10
https://finance.naver.com/item/sise_day.nhn?code=215600&page=11
https://finance.naver.com/item/sise_day.nhn?code=215600&page=12
https://finance.naver.com/item/sise_day.nhn?code=215600&page=13
https://finance.naver.com/item/sise_day.nhn?code=215600&page=14
https://finance.naver.com/item/sise_day.nhn?code=215600&page=15
https://finance.naver.com/item/sise_day.nhn?code=215600&page=16
https://finance.naver.com/item/sise_day.nhn?code=215600&page=17
https://finance.naver.com/item/sise_day.nhn?code=215600&page=18
https://finance.naver.com/item/sise_day.nhn?code=215600&page=19
https://finance.naver.com/item/sise_day.nhn?code=215600&page=20
https://finance.naver.com/item/sise_day.nhn?code=215600&page=21
https://finance.naver.com/item/sise_day.nhn?code=215600&page=22
https://finance.naver.com/item/sise_day.nhn?code=215600&page=23
https://finance.naver.com/item/sise_day.nhn?code=215600&page=24
https://finance.naver.com/item/sise_day.nhn?code=215600&page=25
https://finance.naver.com/item/sise_day.nhn?code=215600&page=26
https://finance.naver.com/item/sise_day.nhn?code=215600&page=27
https://finance.naver.com/item/sise_day.nhn?code=215600&page=28
https://finance.naver.com/item/sise_day.nhn?code=215600&page=29
https://finance.naver.com/item/sise_day.nhn?code=215600&page=30
https://finance.naver.com/item/sise_day.nhn?code=215600&page=31
https://finance.naver.com/item/sise_day.nhn?code=215600&page=32
https://finance.naver.com/item/sise_day.nhn?code=215600&page=33
https://finance.naver.com/item/sise_day.nhn?code=215600&page=34
https://finance.naver.com/item/sise_day.nhn?code=215600&page=35
https://finance.naver.com/item/sise_day.nhn?code=215600&page=36
https://finance.naver.com/item/sise_day.nhn?code=215600&page=37
https://finance.naver.com/item/sise_day.nhn?code=215600&page=38
https://finance.naver.com/item/sise_day.nhn?code=215600&page=39
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    background: "linear-gradient(45deg, #a29bfe 30%,#a29bfe 60%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  buttonSucces: {
    background: "linear-gradient(45deg, #a29bfe 20%, #45fc60 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  buttonRed: {
    background: "linear-gradient(45deg, #a29bfe 20%, #fc4545 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  table: {
    minWidth: "100%",
  },
  tagTextField: {
    minWidth: "100%",
  },
}));

export default function InputForm({
  state,
  setState,
  handleResetData,
  startCompile,
  _handleDataToArray,
}) {
  const classes = useStyles();
  const { tagCounter, urlCounter } = state;

  const [csvData, csvDataSet] = useState(null);
  const [urlsText, setUrlsText] = useState(sampleData);
  const initialValues = state.commonTags.reduce((store, tag, idx) => {
    store[`tag${idx}`] = tag;
    return store;
  }, {});
  const formik = useFormik({
    initialValues,
    onSubmit: (data) => {
      console.log("formik onSubmit", data);
      setState((prev) => prev.setIn(["commonTags"], Object.values(data)));
    },
  });

  useEffect(() => {
    formik.setValues(
      state.commonTags.reduce((store, tag, idx) => {
        store[`tag${idx}`] = tag;
        return store;
      }, {})
    );
    return () => {};
  }, [state]);

  const handleUrlsTextChange = (e) => {
    setUrlsText(e.target.value);
    handleUpdateUrls(e.target.value);
  };
  const handleReset = () => {
    toast.dark("리셋 완료.");
    handleResetData();
  };
  const handleStartTest = () => {
    toast.dark("데이터 수집을 시작합니다.");
    startCompile();
  };

  const handleCSVOutput = () => {
    toast.dark("엑셀로 변환합니다.");
    const result = _handleDataToArray();
    csvDataSet(result);
  };

  const handleUpdateUrls = (urlsText) => {
    let urlsSplited = urlsText.split("\n");
    const pattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/im;
    urlsSplited = urlsSplited.filter((e) => pattern.test(e));
    setState((prev) =>
      prev.set("urlCounter", urlsSplited.length).set("urls", urlsSplited)
    );
  };

  const handleAddTagCounter = () => {
    setState((prev) =>
      prev
        .updateIn(["tagCounter"], (tagCounter) => tagCounter + 1)
        .updateIn(["commonTags"], (arrs) => arrs.push(""))
    );
  };
  const handleUpdateTags = () => {
    toast.dark("태그 업데이트 완료");
    // const nodes = document.querySelectorAll("tagTextField");
    // console.log(nodes);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <div>URLS 태그 수집기</div>
              </TableCell>
              <TableCell>현재 urls 수 :{urlCounter}</TableCell>
              <TableCell>현재 tags 수 :{tagCounter}</TableCell>
              <TableCell>
                <Button
                  style={{ marginLeft: "20px" }}
                  onClick={handleReset}
                  className={classes.button}
                >
                  초기화 하기
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <form onSubmit={formik.handleSubmit}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextareaAutosize
                    rowsMax={100}
                    style={{ width: "100%" }}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    value={urlsText}
                    onChange={handleUrlsTextChange}
                  />
                </TableCell>
              </TableRow>

              <TagsInput classes={classes} formik={formik} />
              <TableRow>
                <TableCell>
                  <Button
                    onClick={handleAddTagCounter}
                    className={classes.button}
                  >
                    태그 추가하기
                  </Button>
                  <Button
                    style={{ marginLeft: "20px" }}
                    onClick={handleUpdateTags}
                    type="submit"
                    className={classes.button}
                  >
                    태그 적용하기
                  </Button>
                  <Button
                    style={{ marginLeft: "20px" }}
                    onClick={handleStartTest}
                    className={classes.buttonSucces}
                  >
                    테스트 하기
                  </Button>
                  <Button
                    style={{ marginLeft: "20px" }}
                    onClick={handleCSVOutput}
                    className={classes.buttonSucces}
                  >
                    엑셀로 저장
                  </Button>
                  {csvData && (
                    <Button
                      style={{ marginLeft: "20px" }}
                      onClick={handleCSVOutput}
                      className={classes.buttonRed}
                    >
                      <CSVLink
                        data={csvData}
                        filename={"my-file.csv"}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Download me
                      </CSVLink>
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </form>
      {/* <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div> */}
    </>
  );
}

const TagsInput = ({ formik, classes }) => {
  return (
    <>
      {Object.entries(formik.values).map((e, idx) => {
        return (
          <TableRow key={idx}>
            <TableCell>
              <TextField
                onChange={formik.handleChange}
                value={e[1]}
                className={classes.tagTextField}
                label={e[0]}
                id={e[0]}
              >
                Tag{idx}
              </TextField>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
