import { Map, List, Record } from "immutable";

export default Map({
  urls: List([
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=10",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=11",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=12",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=13",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=14",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=15",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=16",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=17",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=18",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=19",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=20",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=21",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=22",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=23",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=24",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=25",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=26",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=27",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=28",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=29",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=30",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=31",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=32",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=33",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=34",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=35",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=36",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=37",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=38",
    "https://finance.naver.com/item/sise_day.nhn?code=215600&page=39",
  ]),
  urlCounter: 69,
  commonTags: List([
    "body > table.type2 > tbody > tr:nth-child(3)",
    "body > table.type2 > tbody > tr:nth-child(4)",
    "body > table.type2 > tbody > tr:nth-child(5)",
    "body > table.type2 > tbody > tr:nth-child(6)",
    "body > table.type2 > tbody > tr:nth-child(7)",
    "body > table.type2 > tbody > tr:nth-child(11)",
    "body > table.type2 > tbody > tr:nth-child(12)",
    "body > table.type2 > tbody > tr:nth-child(13)",
    "body > table.type2 > tbody > tr:nth-child(14)",
    "body > table.type2 > tbody > tr:nth-child(15)",
  ]),
  tagCounter: 2,
});

export const stateHead = Map({
  url: "URL",
  tags: List([]),
});

export const stateRow = Record({ url: "", tagResult: List([]) });

export const stateRows = List([]);
