import React, { useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styled from "styled-components";

const Block = ({ children, type, component }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "100px",
      }}
    >
      <DragableItem type={type} component={component}>
        {children}
      </DragableItem>
    </div>
  );
};

const DragableItem = ({ children, type, component }) => {
  const [{ onDrag }, drag] = useDrag({
    item: { type },
    collect: (monitor) => ({
      onDrag: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      style={{
        width: "100%",
        height: "100%",
        border: "2px dashed rgba(0,0,0,0.5)",
        backgroundColor: onDrag
          ? "rgba(31, 209, 165, 0.2)"
          : "rgba(31, 209, 165,1)",
      }}
    >
      {component}
    </div>
  );
};

const BlockWhile = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
        backgroundColor: "rgba(31, 209, 165,1)",
      }}
    >
      while
    </div>
  );
};
const BlockIF = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
        backgroundColor: "rgba(31, 209, 165,1)",
      }}
    >
      IF
    </div>
  );
};

// 보드 판을 하나 만들자 . | 여기에 요소들을 드랙 드랍을 할 수 있어.

const renderSqure = () => {
  return (
    <li
      style={{
        width: "200px",
        height: "100px",
        border: "2px dashed rgba(0,0,0,0.5)",
        marginTop: "1px",
      }}
    >
      <DropZone>DROP ZONE</DropZone>
    </li>
  );
};

const DropZone = ({ children }) => {
  const [droppedType, setDroppedType] = useState(null);
  const [{ isOver }, drop] = useDrop({
    accept: "BLOCK_WHILE",
    drop: (item, monitor) => {
      setDroppedType(item.type);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div
      ref={drop}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: isOver ? "rgba(0,0,0,0.2)" : "",
      }}
    >
      {droppedType ? getTypeComponent(droppedType) : children}
    </div>
  );
};

const Board = () => {
  const squres = [];
  for (let i = 0; i < 10; i++) {
    squres.push(renderSqure());
  }
  return (
    <div>
      <ul>{squres}</ul>
    </div>
  );
};

const getTypeComponent = (type) => {
  if (type === "BLOCK_WHILE") {
    return <BlockWhile />;
  }
  return null;
};

const Team = () => {
  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <div className="team">
          <div className="team__column">
            <Block type={"BLOCK_WHILE"} component={BlockWhile()}></Block>
            <Block type={"BLOCK_IF"} component={BlockIF()}></Block>
          </div>
          <div className="team__column">
            <Board />
          </div>
        </div>
      </DndProvider>
    </Container>
  );
};

export default Team;

const Container = styled.div`
  margin: 5px auto;
  max-width: 1200px;
  & .team {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  & .team__column {
  }
`;
