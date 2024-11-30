import React from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import Madal from "../components/Madal";
import { useState } from "react";

function Home({ todos, setTodos, editTodoChange }) {
  const [todoId, setTodoId] = useState(null);
  const [todo, setTodo] = useState(null);
  const todosDelete = (id) => {
    setTodos((prev) => {
      return prev.filter((us) => {
        return us.id !== id;
      });
    });
  };
  return (
    <>
      <div className="mx-auto my-10 grid max-w-5xl">
        <ul className="grid grid-cols-3 gap-8">
          <Madal t={todo} editTodoChange={editTodoChange} />
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="card w-full bg-base-100 shadow transition-all duration-500 hover:bg-orange-500 hover:text-white hover:shadow-sm"
              >
                <div className="card-body">
                  <h2 className="card-title">{todo.title}</h2>
                  <p>{todo.description.slice(0, 60)}...</p>
                  <div className="card-actions items-center justify-end">
                    <button
                      onClick={() => {
                        setTodoId(todo.id);
                        setTodo(todo);
                        document.getElementById("my_modal_5").showModal();
                      }}
                      className="btn btn-primary btn-sm transition-all duration-500 hover:bg-blue-200 hover:text-black"
                    >
                      <MdModeEditOutline />
                    </button>
                    <Link
                      to={`/read/${todo.id}`}
                      className="btn btn-primary btn-sm transition-all duration-500 hover:bg-blue-200 hover:text-black"
                    >
                      Read
                    </Link>
                    <FaRegTrashAlt
                      onClick={() => todosDelete(todo.id)}
                      className="icon h-5 w-5 transition-all duration-500 hover:text-red-900"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
