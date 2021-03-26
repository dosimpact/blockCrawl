# BlockCrawl/backend

# Install

```js
# yarn install
- 모듈을 설치합니다.

# yarn start

- 서버를 실행합니다.(Dev)

# yarn test

- 크롤링 모듈을 테스트 하기 위한 모드 입니다.
- testMode.js에 인자와 테스트할 모듈(nmoive.js) 를 두고 실행합니다.

# yarn build

- 서버를 빌드합니다.


# docker build -t blockcrwalserver:0.0.1 .
- 도커 이미지를 빌드합니다.
```

# TODO LIST

- [x] 스텔라 플러그인
- [x] 몽고 DB
- [x] graphql - express 탈피
- [x] node.js with redux

- [x] middleware helmet,morgan
- [x] crawlling api connect to express
- [ ] csv IO utils
- [ ] xlsx IO utils

- [ ] crawling function addon

# This repo follows below git flow diagram

- deploy : 베포용 branch
- dev : 개발용 branch
- feature : 기능 추가용 branch

![./img/git-flow_overall_graph.png](./img/git-flow_overall_graph.png)
