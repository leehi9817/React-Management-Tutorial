import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://picsum.photos/64/64",
    name: "이혜인",
    birthday: "980820",
    gender: "여자",
    job: "직장인",
  },
  {
    id: 2,
    image: "https://picsum.photos/64/64",
    name: "이혜원",
    birthday: "020509",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://picsum.photos/64/64",
    name: "이해찬",
    birthday: "100613",
    gender: "남자",
    job: "중학생",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.name}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
