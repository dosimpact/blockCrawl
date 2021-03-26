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

# # ----------------------------------node react setting
# FROM node:13.12.0-alpine as builder

# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# COPY package.json /usr/src/app/package.json
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g

# COPY . /usr/src/app
# RUN npm run build
# # ----------------------------------nginx setting

# FROM nginx:1.13.9-alpine
# # nginx의 기본 설정을 삭제하고 앱에서 설정한 파일을 복사
# RUN rm -rf /etc/nginx/conf.d
# COPY conf /etc/nginx

# # 위에서 생성한 앱의 빌드산출물을 nginx의 샘플 앱이 사용하던 폴더로 이동
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# # 80포트 오픈하고 nginx 실행
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]