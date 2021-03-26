# BlockCrwal/FrontEnd

## published site

[https://dosimpact.github.io/blockCrawl_frontend/](https://dosimpact.github.io/blockCrawl_frontend/)

- Toast Cloud WAS

[http://133.186.241.220/blockCrawl_frontend/](http://133.186.241.220/blockCrawl_frontend/)

# install

```
# yarn install
- 모듈을 설치합니다.

# yarn start

- 서버를 실행합니다.(Dev)

# yarn deploy
- gh-pages에 베포합니다.
```

# require env

```js
    "@apollo/react-hooks": "^3.1.5",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "apollo-boost": "^0.4.7",
    "axios": "^0.19.2",
    "gh-pages": "^2.2.0",
    "graphql": "^15.0.0",
    "graphql-tag": "^2.10.3",
    "react": "^16.13.1",
    "react-beautiful-dnd": "^13.0.0",
    "react-dnd": "^11.1.3",
    "react-dnd-html5-backend": "^11.1.3",
    "react-dom": "^16.13.1",
    "react-grid-layout": "^0.18.3",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.1",
    "react-toastify": "^6.0.6",
    "styled-components": "^5.1.0",
    "styled-reset": "^4.1.4"
```

# TODO

- [✔] one url | one selector 컴포넌트 개발 | 단순 주소 입력 > 단순 셀럭터 하나 입력
- [✔] N url | one selector
- [✔] eg) TDD1 : 네이버 영화 사이트 url 여러개 입력하고, 특정 태그 넣기. 그리고 반환하는 컴포넌트 제작
- [✔] N url | one selector, next one
- [✔] N url | one selector, 하위 one
- [✔] N url | img
- [✔] N url | pdf
- [✔] N url | N selector
- [✔] N url | N selector > xlsx

# Docker Devops - DevServer Container

- STEP1 .dockerignore

```
node_modules
build
.dockerignore
Dockerfile
Dockerfile.prod
```

- STEP2 DockerFile

```js
FROM node:carbon

RUN mkdir -p /app
WORKDIR /app
ADD ./ /app

ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g


EXPOSE 3000

CMD npm start
```

- STEP3 build docker file

```
docker build -t blockcrawl_react:1.0.0 .
```

- STEP4 execution docker image

```
docker run --name blockcrawl_front_server -itd -p 4441:3000 blockcrawl_react:1.0.0

```

- STEP5 check container and monit

```
docker run --name blockcrawl_front_server -itd -p 4441:3000 blockcrawl_react:1.0.0
docker attach -it blockcrawl_front_server bash
```

# Design Ref

- https://dribbble.com/shots/7699472-GitBets-Betting-Platform/attachments/428533?mode=media
- https://dribbble.com/shots/7699472-GitBets-Betting-Platform/attachments/428534?mode=media
- https://dribbble.com/shots/7699472-GitBets-Betting-Platform/attachments/428535?mode=media
- https://www.youtube.com/watch?v=EaYfFYZ4f3I
