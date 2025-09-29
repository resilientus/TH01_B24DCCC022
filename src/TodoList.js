import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
        style={{marginLeft:"35px"}}
      />
      <button onClick={addTask}>Thêm</button>

      <ul>
        {list.map((t, i) => (
          <li key={i} style={{marginLeft:"35px"}}>
            {t} <button onClick={() => deleteTask(i)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
