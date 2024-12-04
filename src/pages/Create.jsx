import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const navigete = useNavigate();
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = "Title kiritilishi shart!";
      alert("        Title kiritilishi shart!    ");
    }
    if (!description.trim()) {
      newErrors.description = "Description kiritilishi shart!";
      alert("     Description kiritilishi shart!  ");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          title,
          description,
        },
      ];
    });
    // console.log(e);
    navigete("/");
  };
  return (
    <div className="mx-auto my-10 w-96">
      <h2 className="mb-10 text-center text-5xl font-medium"> Add NeW todo</h2>
      <form onSubmit={hendleSubmit}>
        <label className="form-control mb-5 w-full">
          <div className="label">
            <span className="label-text">Title:</span>
          </div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            value={title}
            className="input input-bordered w-full"
            // required
          />
        </label>
        <label className="form-control mb-5 w-full">
          <span className="label-text my-2">Description:</span>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered my-2 w-full"
            placeholder="Description"
            value={description}
            // required
          ></textarea>
        </label>
        <button className="btn btn-primary btn-block">Add </button>
      </form>
    </div>
  );
}

export default Create;
