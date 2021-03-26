import React from "react";
import GridLayout from "react-grid-layout";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 60px;
`;

const Box = styled.div`
  background-color: darkcyan;
`;

class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ];
    return (
      <Container>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          <Box key="a">a</Box>
          <Box key="b">b</Box>
          <Box key="c">c</Box>
        </GridLayout>
      </Container>
    );
  }
}
export default MyFirstGrid;
