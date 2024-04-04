// import React, { useState } from 'react';
// import './index.css';

// type Priority = 'p1' | 'p2' | 'p3';

// type Task = {
//   id: number;
//   title: string;
//   isCompleted: boolean;
//   priority?: Priority;
// };

// function App() {
//   const [tasks, setTasks] = useState<Task[]>([
//     {
//       id: 1,
//       title: 'Learn React',
//       isCompleted: true,
//       priority: 'p1',
//     },
//   ]);
//   const [taskName, setTaskName] = useState('');
//   const [editingTask, setEditingTask] = useState<Task | null>(null);

//   const onAddTask = () => {
//     if (taskName.trim()) {
//       setTasks([
//         ...tasks,
//         {
//           id: new Date().getTime(),
//           title: taskName,
//           isCompleted: false,
//         },
//       ]);
//       setTaskName('');
//     }
//   };

//   const handleEdit = (task: Task) => {
//     setEditingTask(task);
//     setTaskName(task.title);
//   };

//   const handleUpdate = () => {
//     if (editingTask && taskName.trim()) {
//       setTasks(
//         tasks.map((task) =>
//           task.id === editingTask.id ? { ...task, title: taskName } : task
//         )
//       );
//       setEditingTask(null);
//       setTaskName('');
//     }
//   };

//   const handleDelete = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   return (
//     <div className="app">
//       <h1>Tasks</h1>
//       <div className="input-container">
//         <input
//           className="task-input"
//           placeholder="Add Task"
//           value={taskName}
//           onChange={(e) => setTaskName(e.target.value)}
//         />
//         <button className="add-btn" onClick={editingTask ? handleUpdate : onAddTask}>
//           {editingTask ? 'Save' : '+'}
//         </button>
//       </div>
//       <ul className="task-list">
//         {tasks.map((task) => (
//           <li key={task.id} className="task-item">
//             {task.title}
//             <div className="task-actions">
//               <button className="edit-btn" onClick={() => handleEdit(task)}>
//                 <i className="fa fa-pencil"></i>
//               </button>
//               <button className="delete-btn" onClick={() => handleDelete(task.id)}>
//                 <i className="fa fa-trash"></i>
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './index.css';
import { FaPencilAlt, FaTrash } from 'react-icons/fa'; // Import pencil and trash icons from react-icons library

type Priority = 'p1' | 'p2' | 'p3';

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Eager to grab this React intern opportunity, and mentorship.',
      isCompleted: true,
      priority: 'p1',
    },
    {
      id: 2,
      title: 'Feel free to explore this To-Do list app',
      isCompleted: true,
      priority: 'p1',
    },
  ]);
  const [taskName, setTaskName] = useState('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const onAddTask = () => {
    if (taskName.trim()) {
      setTasks([
        ...tasks,
        {
          id: new Date().getTime(),
          title: taskName,
          isCompleted: false,
        },
      ]);
      setTaskName('');
    }
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setTaskName(task.title);
  };

  const handleUpdate = () => {
    if (editingTask && taskName.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id ? { ...task, title: taskName } : task,
        ),
      );
      setEditingTask(null);
      setTaskName('');
    }
  };

  const handleDelete = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Tasks</h1>
      <div className="input-container">
        <input
          className="task-input"
          placeholder="Add Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          className="add-btn"
          onClick={editingTask ? handleUpdate : onAddTask}
        >
          {editingTask ? 'Save' : '+'}
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-content">{task.title}</div>
            <div className="task-actions">
              <button className="edit-btn" onClick={() => handleEdit(task)}>
                <FaPencilAlt /> {/* Pencil icon */}
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
              >
                <FaTrash /> {/* Trash icon */}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
