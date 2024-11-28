import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayouts from "./layouts/MainLayouts";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";

//Lokocrotiy
const getTodosLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
function App() {
  const [todos, setTodos] = useState(getTodosLocalStorage());
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home todos={todos} setTodos={setTodos} />,
        },
        {
          path: "/create",
          element: <Create setTodos={setTodos} />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="flex-col-reverse">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
