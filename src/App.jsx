import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./store/todoSlice";

const App = () => {
  const { list } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    let inputVal = e.target[0].value;

    let todoObj = {
      title: inputVal,
      id: Date.now(),
      checked: false,
    };

    dispatch(addTodo(todoObj));

    console.log(list);
  };

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <input
          type="text"
          className="border border-slate-500 outline-none m-3"
        />
        <button className="border border-slate-500 ">add</button>

        <div>
          <ul>
            {list.length === 0
              ? "ma'lumot qo'shing"
              : list.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center w-[400px] border"
                  >
                    <b>{item.id}</b>
                    <span>{item.title}</span>
                    <button onClick={() => dispatch(deleteTodo(item.id))}>delete</button>
                  </li>
                ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default App;
