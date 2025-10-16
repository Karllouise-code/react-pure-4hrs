import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Walk the dog", completed: false },
    { id: 3, title: "Read a book", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks((t) => [...t, { id: t.length + 1, title: newTask, completed: false }]);
    setNewTask("");
  }

  function deleteTask(id) {
    setTasks((t) => t.filter((task) => task.id !== id));
  }

  function moveTaskUp(index) {
    if (index === 0) return;
    setTasks((t) => {
      const newTasks = [...t];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
      return newTasks;
    });
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return;
    setTasks((t) => {
      const newTasks = [...t];
      [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
      return newTasks;
    });
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div>
        <input placeholder="Enter a task..." type="text" value={newTask} onChange={handleInputChange} />

        <button className="add-button" onClick={addTask}>
          Add
        </button>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">
                {task.title} {task.completed ? "(Completed)" : ""}
              </span>
              <button className="delete-button" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
              <button className="move-up-button" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button className="move-down-button" onClick={() => moveTaskDown(index)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
