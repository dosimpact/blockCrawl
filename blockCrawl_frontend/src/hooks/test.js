import React from "react";
import { render } from "react-dom";
import App from "./App";

import { Map, List, Record } from "immutable";

const Person = Record({
  name: "dosimpact",
  age: 1,
});

let person = Person();
console.log(person);
console.log(person.name);
console.log(person.age);

person = person.set("name", "ddos");
console.log(person.toJS());
console.log(person.name);

person = Person({
  name: "영희",
  age: 25,
});
console.log(person);

const nested = Record({
  name: "nested",
  foods: Record({
    kimchi: 1,
    eggs: 3,
  })(),
})();

console.log(nested);
console.log(nested.toJS());
console.log(nested.name);
console.log(nested.foods.kimchi);

render(<App />, document.getElementById("root"));
