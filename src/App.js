import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  // 입력된 toDo 리스트를 받을 비어있는 배열 state를 생성한다
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // 인풋값이 비어있으면 이 함수를 실행시키지 않을것
    if (toDo === "") {
      return;
    }
    // 버튼을 클릭했을 때 입력된 값이 다시 비어짐
    setToDo("");
    // currentArray를 받아왔고 새로운 array를 return 해줌
    setToDos((currentArray) => [toDo, ...currentArray]);
    console.log("list", toDos);
  };
  return (
    <div className="toDoBox">
      <p>({toDos.length}) Tasks</p>
      <form onSubmit={onSubmit}>
        <input
        className="input"
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do..."
        />
        <button className="button">+</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
