import React from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

function Home({ todos, setTodos }) {
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
                    <Link
                      to="/"
                      className="btn btn-primary btn-sm transition-all duration-500 hover:bg-blue-200 hover:text-black"
                    >
                      Buy Now
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
