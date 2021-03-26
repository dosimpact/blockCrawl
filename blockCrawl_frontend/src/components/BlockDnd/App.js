import React, { useState } from "react";
import { toast } from "react-toastify";
import InitData from "./InitData";

import { CrwalingAPI } from "../../api";

import AppPresenter from "./AppPresenter";
import { Helmet } from "react-helmet";

const compileStart = async (state, setState) => {
  console.log("compileStart");
  // 우선 logic컬럼의 task들을 q에 넣고 , q가 반복문을 한 바퀴 돌자.
  let q = Array.from(state.toJS().columns["column-2"].tasksId);
  console.log("tasks", q);
  let currentURL = "";
  console.log("now q:", q);

  const GoToPage = (key, value) => {
    currentURL = value;
    setState((prev) => {
      return prev
        .setIn(["tasks", key, "result", "loading"], false)
        .setIn(["tasks", key, "result", "completed"], true);
      // prev.tasks[key].result.loading = false;
      // prev.tasks[key].result.completed = true;
      // return { ...prev };
    });
  };

  const GetSelector = async (key, value) => {
    if (currentURL === "") {
      setState((prev) => {
        return prev.setIn(["tasks", key, "result", "error"], "No URL");
        // prev.tasks[key].result.error = "No URL";
        // return { ...prev };
      });
      return "No URL";
    }
    // loading state로 변환
    setState((prev) => {
      return prev.setIn(["tasks", key, "result", "loading"], true);
      // prev.tasks[key].result.loading = true;
      // return { ...prev };
    });

    try {
      console.log("currentURL", currentURL);

      const {
        data: {
          data: { urlTag: data },
        },
        status,
      } = await CrwalingAPI.urlTagAPI({
        url: currentURL,
        tag: value,
      });

      if (status === 200) {
        setState((prev) => {
          return prev
            .setIn(["tasks", key, "result", "error"], null)
            .setIn(["tasks", key, "result", "data"], data);
          // prev.tasks[key].result.error = null;
          // prev.tasks[key].result.data = data;
          // return { ...prev };
        });
      } else {
        throw Error("status not 200");
      }
    } catch (error) {
      setState((prev) => {
        return prev.setIn(["tasks", key, "result", "error"], true);
        // prev.tasks[key].result.error = true;
        // return { ...prev };
      });
    } finally {
      setState((prev) => {
        return prev
          .setIn(["tasks", key, "result", "loading"], false)
          .setIn(["tasks", key, "result", "completed"], true);
        // prev.tasks[key].result.loading = false;
        // prev.tasks[key].result.completed = true;
        // return { ...prev };
      });
    }
  };

  const GetIMG = async (key, value) => {
    if (currentURL === "") {
      setState((prev) => {
        return prev.setIn(["tasks", key, "result", "error"], "No URL");
        // prev.tasks[key].result.error = "No URL";
        // return { ...prev };
      });
      return "No URL";
    }
    // loading state로 변환
    setState((prev) => {
      return prev.setIn(["tasks", key, "result", "loading"], true);
      // prev.tasks[key].result.loading = true;
      // return { ...prev };
    });

    try {
      console.log("currentURL", currentURL);
      const {
        data: {
          data: { urlCapture: data },
        },
        status,
      } = await CrwalingAPI.urlCaptureAPI({
        url: currentURL,
      });

      if (status === 200) {
        setState((prev) => {
          return prev
            .setIn(["tasks", key, "result", "error"], null)
            .setIn(["tasks", key, "result", "data"], data);
          // prev.tasks[key].result.error = null;
          // prev.tasks[key].result.data = data;
          // return { ...prev };
        });
      } else {
        throw Error("status not 200");
      }
    } catch (error) {
      setState((prev) => {
        return prev.setIn(["tasks", key, "result", "error"], true);
      });
    } finally {
      setState((prev) => {
        return prev
          .setIn(["tasks", key, "result", "loading"], false)
          .setIn(["tasks", key, "result", "completed"], true);
        // prev.tasks[key].result.loading = false;
        // prev.tasks[key].result.completed = true;
        // return { ...prev };
      });
    }
  };
  const GetPDF = async (key, value) => {
    if (currentURL === "") {
      setState((prev) => {
        prev.tasks[key].result.error = "No URL";
        return { ...prev };
      });
      return "No URL";
    }
    // loading state로 변환
    setState((prev) => {
      // prev.tasks[key].result.loading = true;
      return prev.setIn(["tasks", key, "result", "loading"], true);
    });

    try {
      console.log("currentURL", currentURL);
      const {
        data: {
          data: { urlPDF: data },
        },
        status,
      } = await CrwalingAPI.urlPDFAPI({
        url: currentURL,
      });

      if (status === 200) {
        setState((prev) => {
          return prev
            .setIn(["tasks", key, "result", "error"], null)
            .setIn(["tasks", key, "result", "data"], data);
        });
      } else {
        throw Error("status not 200");
      }
    } catch (error) {
      setState((prev) => {
        return prev.setIn(["tasks", key, "result", "error"], true);
        // prev.tasks[key].result.error = true;
        // return { ...prev };
      });
    } finally {
      setState((prev) => {
        return prev
          .setIn(["tasks", key, "result", "loading"], false)
          .setIn(["tasks", key, "result", "completed"], true);
        // prev.tasks[key].result.loading = false;
        // prev.tasks[key].result.completed = true;
        // return { ...prev };
      });
    }
  };

  while (q.length !== 0) {
    const key = q[0];
    const { id, content, input, value, isFetch } = state.toJS().tasks[key];
    console.log(id, content, input, value, isFetch);

    // CASE - 페이지 url을 변경한다.
    if (content === "Go To Page") {
      if (GoToPage(key, value)) {
        break;
      }
    }
    //CASE - page에서 Selector를 가져와야 하는 경우  : 셀렉터를 변경하고, data fetching을 진행한다.
    if (isFetch && content === "Get Selector") {
      if (await GetSelector(key, value)) {
        break;
      }
    }
    //CASE - page에서 이미지 가져와야 하는 경우
    if (isFetch && content === "Get IMG") {
      if (await GetIMG(key, value)) {
        break;
      }
    }
    //CASE - page에서 이미지 가져와야 하는 경우
    if (isFetch && content === "Get PDF") {
      if (await GetPDF(key, value)) {
        break;
      }
    }
    q.shift();
  }
  if (q.length === 0) {
    toast.success("Logic Compile Sucess!");
    setState((prev) => {
      return prev.setIn(["compliedStatus"], 0);
    });
  } else {
    toast.error("Logic Compile Fail");
    setState((prev) => {
      return prev.setIn(["compliedStatus"], 1);
    });
  }
};

const App = () => {
  // const [
  //   fetch_URL_TAG,
  //   { data: URL_TAG_data, loading: URL_TAG_loading, refetch: URL_TAG_refetch },
  // ] = useLazyQuery(URL_TAG);
  const [state, setState] = useState(InitData);

  const onDragStart = (start) => {
    // console.log("onDragStart", start);
    // document.body.style.transition = "all 0.2s ease";
    // document.body.style.color = "#a29bfe";
  };
  const onDragUpdate = (result) => {
    // console.log("onDragUpdate", result);
  };
  const onDragEnd = (result) => {
    document.body.style.color = "inherit";
    document.body.style.transition = "inherit";

    console.log("onDragEnd", result);
    const { source, destination, draggableId } = result; // source => destination 으로 draggableId가 드래깅 되었다.
    // dropzone 밖
    if (!destination) return;
    // 같은 위치로 드랍
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // 변화전 Col,Idx => 변화 후 Col,Idx
    const startIdx = source.index;
    const endIdx = destination.index;

    const startCol = state.toJS().columns[source.droppableId];
    const endCol = state.toJS().columns[destination.droppableId];
    //CASE: 하나의 column안에서 위치만 change
    if (destination.droppableId === source.droppableId) {
      const columnID = destination.droppableId;
      setState((prev) =>
        prev.updateIn(["columns", columnID, "tasksId"], (pdata) =>
          pdata.splice(startIdx, 1).splice(endIdx, 0, draggableId)
        )
      );
      return;
    }

    if (destination.droppableId === "column-2") {
      const originTask = state.toJS().tasks[draggableId];
      const id = `task-${Date.now()}`;
      setState((prev) =>
        prev
          .setIn(["tasks", id], { ...originTask, id })
          .updateIn(["columns", endCol.id, "tasksId"], (pdata) =>
            pdata.splice(endIdx, 0, id)
          )
      );
      return;
    }
    //CASE: Trash Bin 드랍 : Task의 삭제
    if (destination.droppableId === "column-3") {
      // console.log("CASE: Trash Bin 드랍 : Task의 삭제");
      setState((prev) =>
        prev.updateIn(["columns", startCol.id, "tasksId"], (pdata) =>
          pdata.splice(startIdx, 1)
        )
      );
      return;
    }
  };
  const complie = () => {
    compileStart(state, setState);
  };

  return (
    <>
      <Helmet>
        <title>BlockCrawl 블록코딩 </title>
      </Helmet>
      <AppPresenter
        state={state.toJS()}
        setState={setState}
        compileStart={complie}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
      />
    </>
  );
};

export default App;
