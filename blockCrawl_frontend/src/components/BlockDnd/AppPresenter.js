import React from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import Button from "../../components/Button";

const AppPresenter = ({
  state,
  setState,
  compileStart,
  onDragEnd,
  onDragStart,
  onDragUpdate,
}) => {
  return (
    <Wrapper>
      <ResultBox Status={state.compliedStatus}>
        <div className="ResultBox__column">
          <Button className="ResultBox__Button" text="File" />
          <Button className="ResultBox__Button" text="Edit" />
          <Button className="ResultBox__Button" text="Selection" />
          <Button className="ResultBox__Button" text="View" />
          <Button className="ResultBox__Button" text="Go" />
          <Button className="ResultBox__Button" text="Help" />
        </div>
        <div className="ResultBox__column">
          <Button
            className="ResultBox__Button"
            text={
              state.compliedStatus === -1
                ? "Complie"
                : state.compliedStatus === 0
                ? "Complie ✔"
                : "Complie ❌"
            }
            onClick={compileStart}
          />
          <Button className="ResultBox__Button" text="Reset" />
          <Button className="ResultBox__Button" text="Save" />
        </div>
      </ResultBox>
      <Container>
        <DragDropContext
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
        >
          {state.columnOrder.map((columnId, idx) => {
            const column = state.columns[columnId];
            const tasks = column.tasksId.map((id) => state.tasks[id]);
            return (
              <Column
                tasks={tasks}
                column={column}
                key={idx}
                setState={setState}
              />
            );
          })}
        </DragDropContext>
      </Container>
      <div style={{ fontSize: "20px" }}>
        <pre>{JSON.stringify(state.columns, null, 2)}</pre>
      </div>
      <hr />
      <div style={{ fontSize: "20px" }}>
        <pre>{JSON.stringify(state.columnOrder, null, 2)}</pre>
      </div>
      <hr />
      <div style={{ fontSize: "20px" }}>
        <pre>{JSON.stringify(state.tasks, null, 2)}</pre>
      </div>
    </Wrapper>
  );
};

export default AppPresenter;

const Wrapper = styled.div``;
const Container = styled.div`
  display: flex;
`;

const ResultBox = styled.div`
  width: 100%;
  min-height: 100px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .ResultBox__column {
  }

  & .ResultBox__Button {
    min-width: 80px;
    min-height: 40px;
    margin: 4px;
    font-size: 16px;
    font-weight: 200;
  }
`;

// const URL_TAG = gql`
//   query urlTagQuery($tag: String!, $url: String!) {
//     urlTag(tag: $tag, url: $url)
//   }
// `;
