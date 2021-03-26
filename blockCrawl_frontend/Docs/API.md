```js
const HELLO_3 = gql`
  query hello($id: Int!) {
    hello3(id: $id)
  }
`;

const QueryPractice = () => {
  const { loading, error, data } = useQuery(HELLO_3, {
    variables: { id: 777 },
  });
  return (
    <>
      <h2>Query Practice</h2>
      {loading && "Loading..."}
      {data && JSON.stringify(data)}
    </>
  );
};
```

```js
const HELLO_4 = gql`
  query hello($id: Int!, $name: String!, $info: [String!]!) {
    hello4(id: $id, name: $name, info: $info)
  }
`;

const QueryPractice = () => {
  const { loading, error, data } = useQuery(HELLO_4, {
    variables: {
      id: 777,
      name: "DOSimpact",
      info: ["im handsome", "eat kimchi"],
    },
  });
  return (
    <>
      <h2>Query Practice</h2>
      {loading && "Loading..."}
      {data && JSON.stringify(data)}
    </>
  );
};
```

- useLazyQuery는 error가 없다.
- 초기 상태 , loading false, data null
- getting... , loading true, data null,
- finish with suc, loading false, data [incoming],
- finish with fail, loading false, data null,

```js
import gql from "graphql-tag";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";

const HELLO_4 = gql`
  query hello($id: Int!, $name: String!, $info: [String!]!) {
    hello4(id: $id, name: $name, info: $info)
  }
`;

const QueryPractice = () => {
  const [getHello, { loading, data }] = useLazyQuery(HELLO_4);
  const handleClick = () => {
    console.log("handleClick Event");
    getHello({
      variables: {
        id: 777,
        name: "DOSimpact",
        info: ["im handsome", "eat kimchi"],
      },
    });
  };
  return (
    <>
      <h2>Query Practice</h2>
      {loading && "Loading..."}
      {data && JSON.stringify(data)}
      <button onClick={handleClick}>Fetching</button>
    </>
  );
};
```
