import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoLoading,
  addTodoSuccess,
  getTodoLoading,
  getTodoSuccess,
} from "../Redux/action";
import axios from "axios";

export const Todos = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    dispatch(getTodoLoading());

    const { data } = await axios.get("http://localhost:3050/todos");
    dispatch(getTodoSuccess(data));
  };

  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.todos);
  const [text, setText] = useState("");

  const handleAdd = async () => {
    dispatch(addTodoLoading());
    const payload = { status: false, title: text, id: Math.random() };

    const { data } = await axios.post("http://localhost:3050/todos", payload);
    dispatch(addTodoSuccess(data));
    getData();
  };

  return loading ? (
    <h1>...Loading, Please Wait</h1>
  ) : error ? (
    <h1>Error Occuered</h1>
  ) : (
    <div>
      <input
        value={text}
        type="text"
        placeholder="Enter Todos"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {data.map((e) => (
        <div>
          <div key={e.id}>{e.title}</div>
        </div>
      ))}
    </div>
  );
};
