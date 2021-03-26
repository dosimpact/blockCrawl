import { Map, List, Record } from "immutable";

export const baseFormat = Record({
  id: "task-X",
  content: "Free",
  input: false,
  inputType: null,
  isFetch: false,
  result: Map({ error: null, loading: false, data: null, completed: false }),
  value: "",
});

export default Record({
  tasks: Map({
    "task-1": baseFormat({ id: "task-1", content: "if" }),
    "task-2": baseFormat({ id: "task-2", content: "if end" }),
    "task-3": baseFormat({ id: "task-3", content: "while" }),
    "task-4": baseFormat({ id: "task-4", content: "while end" }),
    "task-5": baseFormat({
      id: "task-5",
      content: "Go To Page",
      input: true,
      isFetch: false,
      value: "https://movie.naver.com/movie/bi/mi/basic.nhn?code=187321",
    }),
    "task-6": baseFormat({
      id: "task-6",
      content: "Get Selector",
      input: true,
      isFetch: true,
      value:
        "#content > div.article > div.mv_info_area > div.mv_info > h3 > a:nth-child(1)",
    }),
    "task-7": baseFormat({
      id: "task-7",
      content: "Return Format",
      input: true,
    }),
    "task-8": baseFormat({
      id: "task-8",
      content: "Get PDF",
      isFetch: true,
    }),
    "task-9": baseFormat({
      id: "task-9",
      content: "Get IMG",
      isFetch: true,
    }),
    "task-10": baseFormat({
      id: "task-10",
      content: "Go To Page",
      input: true,
      isFetch: false,
      value: "https://movie.naver.com/movie/bi/mi/basic.nhn?code=106360",
    }),
    "task-11": baseFormat({
      id: "task-11",
      content: "Get Selector",
      input: true,
      isFetch: true,
      value:
        "#content > div.article > div.mv_info_area > div.mv_info > h3 > a:nth-child(1)",
    }),
    "task-12": baseFormat({
      id: "task-12",
      content: "Go To Page",
      input: true,
      isFetch: false,
      value: "https://github.com/",
    }),
    "task-13": baseFormat({
      id: "task-13",
      content: "Get Selector",
      input: true,
      isFetch: true,
      value:
        "body > div.application-main > main > div.py-6.py-sm-8.jumbotron-codelines > div > div > div.col-md-7.text-center.text-md-left > h1",
    }),
    "task-14": baseFormat({
      id: "task-14",
      content: "Get IMG",
      isFetch: true,
    }),
  }),
  compiledCode: "",
  compliedStatus: -1,
  // columns에 대한 정보 및 task과의 관계

  columns: Map({
    "column-1": Record({
      id: "column-1",
      title: "Palette🎨",
      tasksId: List([
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-5",
        "task-6",
        "task-7",
        "task-8",
        "task-9",
      ]),
    })(),
    "column-2": Record({
      id: "column-2",
      title: "Logic💠",
      tasksId: List(["task-10", "task-11", "task-12", "task-13"]),
    })(),
    "column-3": Record({
      id: "column-3",
      title: "🗑 Trash bin",
      tasksId: List([]),
    })(),
  }),

  columnOrder: List(["column-1", "column-2", "column-3"]), // column랜더링 순서
})();
