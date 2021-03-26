# Crawlling 아카이브

# 교육용 블록코딩을 활용한 웹자동화 제작 플렛폼

# 설치 및 실행

1. front-end, back-end 깃허브 클론

   - [https://github.com/DosImpact/blockCrawl_frontend](https://github.com/DosImpact/blockCrawl_frontend)
   - [https://github.com/DosImpact/blockCrawl_backend](https://github.com/DosImpact/blockCrawl_backend)

2. npm install or yarn install

- example

```
C:\Users\Dos\Desktop\Projects\blockcrawl_frontend>yarn install
C:\Users\Dos\Desktop\Projects\blockcrawl_backend>yarn install
```

3. .env 셋팅

```
NAME = "DOYOUNG"
PORT = 4000
SERVER_URL = "http://localhost:4000/"

# DB_URI = "mongodb://dosimpact:589742@133.186.241.220:27017/admin"
DB_URI = "mongodb://dosimpact:589742@127.0.0.1:27017/admin"

REMOVE_FILE_TIME = 300000

HEAD_LESS = "false"
BRS_WIDTH = 1660
BRS_HEIGHT = 900
```

4. 실행하기 - yarn start | dev

- example

```
C:\Users\Dos\Desktop\Projects\blockcrawl_frontend>yarn start
yarn run v1.21.1
$ react-scripts start


C:\Users\Dos\Desktop\Projects\blockCrawl_backend>yarn dev
yarn run v1.21.1
$ nodemon --exec babel-node src/server.js
✔ Server is running on http://localhost:4000
✔ MongoDB connected...
✔ puppeteer is running
```

# 개발동기

```c
사무직 업무를 하는데 있어 매번 반복적인 업무가 있습니다. 바로 데이터를 수집하고 처리하는 일입니다.
매번 이런 단순하고 동일한 과정의 업무을 처리하기위해 업무 자동화의 니즈가 증가합니다.
하지만 웹 자동화 기술은 일반 사무직 근로자들이 배우려면 상당한 러닝 커브가 있습니다.
언어의 자체 기초문법을 배우고 로직 구현을 위해서는 최소 24시간의 학습 시간이 필요합니다.
그렇다고 단순히 자료 조사를 위해 외주 작업을 맡기기에는 무리가 있어 결국 반복적인 업무를 직접 하게됩니다.


따라서 누구나 쉽게 GUI환경에서 자동화 로직을 구현할 수 있는 개발 플랫폼을 만들게 되었습니다.
스크립트 코드 작성없이 누구나 손쉽게 교육용 블록코딩으로
자동화 소프트웨어를 만들어 볼 수 있습니다.
그리고 잘 만든 블록 로직을 다른 사람과 공유하고 데이터 분석이 가능한 클라우드 플랫폼이 최종 목표입니다.
```

# 개발 목표

```
1. 블록코딩 시스템을 완성하여 웹문서의 데이터를 수집하고, 이미지 및 PDF 정보도 수집할 수 있습니다.
2. 빅데이터 수집을 위한 시스템을 만들고 수집된 정보를 엑셀로 다운받을 수 있습니다.
```

# 주요 기능

```
블록코딩으로
웹자동화 로직구현 가능

GoToPage
특정 URL페이지 이동

Get Selector
HTML 데이터 수집

Get PDF/IMG
현재 페이지를 PDF,IMG로 변환

```

```
다수의 ULR 과 페이지당 테그 입력하여 엑셀데이터 추출이 가능합니다.

예시
금융데이터 수집
커뮤니티사이트 데이터 수집
```

# 구조

![./Docs/blockcrawl_arch.png](./Docs/blockcrawl_arch.png)

# WebUI & demo

![demo1.gif](./Docs/demo1.gif)
![demo2.gif](./Docs/demo2.gif)
![demo3.gif](./Docs/demo3.gif)
![demo4.gif](./Docs/demo4.gif)

# 베포 하기

# FrontSide Docker Devops - DevServer Container

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
docker build -t ehdudtkatka/bc_front:0.0.4 .
```

- STEP4 execution docker image

```
docker run --name bc_front -itd -p 80:3000 ehdudtkatka/bc_front:0.4

```

- STEP5 check container and monit

```
docker run --name bc_front -itd -p 80:3000 ehdudtkatka/bc_front:0.4
docker attach -it blockcrawl_front_server bash
```

# ServerSide Docker Devops - DevServer Container

- STEP1 .dockerignore

```
node_modules
build
.dockerignore
Dockerfile
Dockerfile.prod
```

- STEP2 DockerFile

```dockerfile
FROM node:10.20.1-slim@sha256:05d1d270480b6e99753076b6656bb5a37edb7ca31af20c008568a556bc82d2a8

RUN  apt-get update

RUN  apt-get install -y wget gnupg ca-certificates \
     && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'

RUN  apt-get update \
     && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
     --no-install-recommends \
     && rm -rf /var/lib/apt/lists/* \
     && wget --quiet https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/sbin/wait-for-it.sh \
     && chmod +x /usr/sbin/wait-for-it.sh


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH=/usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install --silent

COPY . /usr/src/app

EXPOSE 4000

CMD npm run start
```

- STEP3 build docker file

```
docker build -t ehdudtkatka/bc_back:0.4 .
```

- STEP4 execution docker image

```
docker run --name bc_back -itd -p 4000:4000 ehdudtkatka/bc_back:0.4

```

- STEP5 check container and monit

```
docker run --name bc_back -itd -p 4000:4000 ehdudtkatka/bc_back:0.4
docker attach -it bc_back bash
```

# 활용 기술

```
PC 빌드
Chrome 웹 어플리케이션
Node.js Win32/64 데스크톱 어플리케이션

기술 및 라이브러리
Front	 React JS, Hook , Apollo Client, Blockly, Redux
Back 	 Node.js, Express, Graphql-yoga, multer/s3, puppeteer, Prisma
Devops   NCP,Docker, Netlify, AWS S3,
```

# 래퍼런스

```
깃허브 주소
https://github.com/DosImpact/blockCrawl_frontend
https://github.com/DosImpact/blockCrawl_backend

사이트 주소
웹사이트 LiveDemo :  http://133.186.241.220

사용자 개발자 테스트 가이드
https://drive.google.com/file/d/1PRBB5QHYw0ZnwUi3E5V3t8-hyRpMkq1E/view?usp=sharing

```

# 이전 버전 Docs

[./Docs/deprecated.md](./Docs/deprecated.md)
