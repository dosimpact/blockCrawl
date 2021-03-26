import React, { useState } from "react";

import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Block = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <div>Block.js</div>
        <Board />
      </>
    </DndProvider>
  );
};

export default Block;

const Board = () => {
  const [pos, setPos] = useState({ x: 1, y: 1 });
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, pos, setPos));
  }
  return (
    <div
      style={{
        width: "700px",
        height: "700px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
};

const renderPiece = (thisPos, pos) => {
  if (thisPos.x === pos.x && thisPos.y === pos.y) {
    return <Knight />;
  }
};
const renderSquare = (i, pos, setPos) => {
  const thisPos = { x: i % 8, y: Math.floor(i / 8) };

  return (
    <div
      key={i}
      style={{
        width: "12.5%",
        height: "12.5%",
        backgroundColor: "blanchedalmond",
        border: "1px solid white",
      }}
    >
      <DropZone thisPos={thisPos} pos={pos} setPos={setPos}>
        {renderPiece(thisPos, pos)}
      </DropZone>
    </div>
  );
};

const DropZone = ({ children, thisPos, pos, setPos }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "BLOCK",
    drop: () => setPos({ x: thisPos.x, y: thisPos.y }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: isOver ? "red" : "",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

const Knight = () => {
  const [{ onDrag, test }, drag] = useDrag({
    item: { type: "BLOCK" },
    collect: (monitor) => ({
      onDrag: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      style={{
        opacity: onDrag ? 0.5 : 1,
        cursor: "pointer",
        fontSize: "30px",
        backgroundColor: "white",
      }}
      onClick={() => console.log("helhel")}
    >
      <span>💌</span>
    </div>
  );
};
