import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

import Task from "./Task";

const Column = ({ tasks, column, setState }) => {
  return (
    <Container columnId={column.id}>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id} type={"done"}>
        {(provided, snapshot) => (
          <TaskList
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, idx) => (
              <Task
                columnId={column.id}
                key={task?.id || "task-X"}
                task={task}
                index={idx}
                setState={setState}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;

  min-width: 220px;
  width: ${(props) => (props.columnId === "column-2" ? "100%" : "")};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex-flow: column nowrap;
  & .column-1 {
    background-color: red;
  }
`;
const Title = styled.div`
  font-size: 24px;
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "#55efc4" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;
