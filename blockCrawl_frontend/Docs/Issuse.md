# 01. iframe 태그안의 document와, 현재의 document는 서로 다른 스코프 를 가진다.

- 문제: 아무리 열심히 reactapp을 만들어도 iframe의 상태와 소통은 전혀 다르다.

- [https://medium.com/@ariel.salem1989/communicating-with-iframes-712fdc2b4d14](https://medium.com/@ariel.salem1989/communicating-with-iframes-712fdc2b4d14)
- 해결 : window.postMessage();

# 02. HTTPS 문제

```
httpLink.ts:134 Mixed Content: The page at 'https://dosimpact.github.io/' was loaded over HTTPS, but requested an insecure resource 'http://133.186.241.220:4000/'. This request has been blocked; the content must be served over HTTPS.
```
