import React, { useState } from 'react'

export default function TodoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { id: Date.now(), text: task }]);
            setTask('');
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-400">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Nhập công việc mới"
                    />
                    <button
                        className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
                        onClick={addTask}
                    >
                        Thêm
                    </button>
                </div>
                <ul className="space-y-2">
                    {tasks.map((t) => (
                        <li
                            key={t.id}
                            className="flex justify-between items-center p-2 border-b border-gray-200"
                        >
                            <span className="text-gray-800">{t.text}</span>
                            <button
                                className="text-red-500 hover:text-red-700 font-semibold"
                                onClick={() => deleteTask(t.id)}
                            >
                                Xóa
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
