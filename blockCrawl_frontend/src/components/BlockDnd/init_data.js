const basicFormat = {
  id: "task-X",
  content: "Free",
  input: false,
  inputType: null,
  isFetch: false,
  result: { error: null, loading: false, data: null, completed: false },
  value: "",
};

const makeDeepCopy = () => {
  return JSON.parse(JSON.stringify(basicFormat));
};

export default {
  tasks: {
    "task-1": { ...makeDeepCopy(), id: "task-1", content: "if" },
    "task-2": { ...makeDeepCopy(), id: "task-2", content: "if end" },
    "task-3": { ...makeDeepCopy(), id: "task-3", content: "while" },
    "task-4": { ...makeDeepCopy(), id: "task-4", content: "while end" },
    "task-5": {
      ...makeDeepCopy(),
      id: "task-5",
      content: "Go To Page",
      input: true,
      isFetch: false,
      value: "https://movie.naver.com/movie/bi/mi/basic.nhn?code=187321",
    },
    "task-6": {
      ...makeDeepCopy(),
      id: "task-6",
      content: "Get Selector",
      input: true,
      isFetch: true,
      value:
        "#content > div.article > div.mv_info_area > div.mv_info > h3 > a:nth-child(1)",
    },
    "task-7": {
      ...makeDeepCopy(),
      id: "task-7",
      content: "Return Format",
      input: true,
    },
    "task-8": {
      ...makeDeepCopy(),
      id: "task-8",
      content: "Get PDF",
      isFetch: true,
    },
    "task-9": {
      ...makeDeepCopy(),
      id: "task-9",
      content: "Get IMG",
      isFetch: true,
    },
    "task-10": {
      ...makeDeepCopy(),
      id: "task-10",
      content: "Go To Page",
      input: true,
      isFetch: false,
      value: "https://movie.naver.com/movie/bi/mi/basic.nhn?code=106360",
    },
    "task-11": {
      ...makeDeepCopy(),
      id: "task-11",
      content: "Get Selector",
      input: true,
      isFetch: true,
      value:
        "#content > div.article > div.mv_info_area > div.mv_info > h3 > a:nth-child(1)",
    },
    "task-12": {
      ...makeDeepCopy(),
      id: "task-12",
      content: "Go To Page",
      input: true,
      isFetch: false,
      value: "https://github.com/",
    },
    "task-13": {
      ...makeDeepCopy(),
      id: "task-13",
      content: "Get Selector",
      input: true,
      isFetch: true,
      value:
        "body > div.application-main > main > div.py-6.py-sm-8.jumbotron-codelines > div > div > div.col-md-7.text-center.text-md-left > h1",
    },
    "task-14": {
      ...makeDeepCopy(),
      id: "task-14",
      content: "Get IMG",
      isFetch: true,
    },
  },
  compiledCode: "",
  compliedStatus: -1,
  // columns에 대한 정보 및 task과의 관계
  columns: {
    "column-1": {
      id: "column-1",
      title: "Palette🎨",
      tasksId: [
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-5",
        "task-6",
        "task-7",
        "task-8",
        "task-9",
      ],
    },
    "column-2": {
      id: "column-2",
      title: "Logic💠",
      tasksId: ["task-10", "task-11", "task-12", "task-13"],
    },
    "column-3": {
      id: "column-3",
      title: "🗑 Trash bin",
      tasksId: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"], // column랜더링 순서
};
