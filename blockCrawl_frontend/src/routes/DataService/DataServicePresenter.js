import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const makeHeadArray = (stateHead) => {
  return [stateHead.url].concat(stateHead.tags);
};
const makeRowArray = (stateRow) => {
  return [stateRow.url].concat(stateRow.tagResult);
};

export default function DataServicePresenter({ stateHead, stateRows }) {
  const classes = useStyles();
  const bottom = useRef();
  console.log(stateHead, stateRows);

  useEffect(() => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
    return () => {};
  }, [stateHead]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {makeHeadArray(stateHead).map((e, idx) => {
              return <TableCell>{e}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {stateRows.map((row, idx) => {
            const array = makeRowArray(row);
            return (
              <TableRow key={row.url}>
                {array.map((e, idx) => {
                  if (idx === 0) {
                    return (
                      <TableCell key={idx}>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          style={{ cursor: "pointer" }}
                          href={e}
                        >
                          {e}
                        </a>
                      </TableCell>
                    );
                  }
                  return <TableCell key={idx}>{e}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div ref={bottom}></div>
    </TableContainer>
  );
}
