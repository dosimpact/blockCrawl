import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../components/Button";
import { Draggable } from "react-beautiful-dnd";
import key from "../../config/key";

const Task = ({ columnId, task, index, setState }) => {
  const hasInput = task?.input ?? false;
  const inputHook = useInput(task.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit", inputHook.value);
    setState((prev) =>
      prev.setIn(["tasks", task.id, "value"], inputHook.value)
    );
  };
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          name={task.content}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.content}
          {hasInput && (
            <>
              <form onSubmit={onSubmit} className="task__form">
                <input
                  onChange={onSubmit}
                  className="Task__Input"
                  {...inputHook}
                ></input>
                {/* <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select> */}
              </form>
            </>
          )}
          <br />
          {renderState(columnId, task)}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;

const renderState = (columnId, task) => {
  if (columnId === "column-2") {
    return (
      <>
        {task.result.loading && (
          <span role="img" aria-label="loading...">
            loading....🔎
          </span>
        )}
        {!task.result.loading && task.result.error && (
          <span role="img" aria-label="completed">
            ❌
          </span>
        )}
        {!task.result.loading && task.result.completed && (
          <span role="img" aria-label="completed">
            ✅
          </span>
        )}
        {!task.result.loading && task.result.completed && task.result.data && (
          <SpanResult>
            {task?.result?.data.replace(/\s+/gi, " ") || "데이터 없음"}
          </SpanResult>
        )}
        {task.content === "Get IMG" &&
          !task.result.loading &&
          task.result.completed && (
            <img
              alt="result_img"
              src={`${key.SERVER_URI}${task.result?.data}`}
              //src={"http://localhost:4000/Instagram_1590330674608.png"}
              width="400px"
              height="200px"
            />
          )}
        {task.content === "Get PDF" &&
          !task.result.loading &&
          task.result.completed && (
            <Button
              text="GET PDF"
              onClick={() =>
                handleGetFile(`${key.SERVER_URI}download/${task.result.data}`)
              }
            />
          )}
        {/* {JSON.stringify(task.result)} */}
      </>
    );
  } else {
    return <></>;
  }
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

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    if (e) {
      setValue(e.target.value);
    }
  };
  return { value, onChange };
};

const makeTaskColor = (name, theme) => {
  switch (name) {
    case "if":
      return theme.PastelYellow;
    case "if end":
      return theme.PastelYellow;
    case "while":
      return theme.PastelOrange;
    case "while end":
      return theme.PastelOrange;
    case "Go To Page":
      return theme.PastelRed;
    case "Get Selector":
      return theme.PastelBlue;
    case "Return Format":
      return theme.PastelPurple;
    case "Get PDF":
      return theme.PastelMint;
    case "Get IMG":
      return theme.PastelGreen;
    default:
      return theme.whiteColor;
  }
};

const Container = styled.div`
  border: 1px solid lightgray;
  padding: 8px;
  display: flex;
  min-height: 100px;

  background: ${(props) => makeTaskColor(props.name, props.theme)};
  display: flex;
  flex-flow: column nowrap;

  transition: 0.2s all ease-in-out;
  & .task__form {
    margin-top: 7px;
  }
  & .Task__Input {
    width: 100%;
  }
  &:hover {
    background-color: ${(props) => props.theme.lightPupleColor};
  }
`;

const SpanResult = styled.span`
  font-size: 25px;
`;
