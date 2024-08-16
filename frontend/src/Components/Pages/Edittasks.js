import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
  const navigate = useNavigate();
  const params = useParams();

  const summaryRef = useRef();
  const assigneeRef = useRef();
  const reporterRef = useRef();
  const priorityRef = useRef();
  const statusRef = useRef();

  const [task, setTask] = useState({
    Summary: '',
    Assignee: '',
    Reporter: '',
    Priority: '',
    Status: ''
  });

  useEffect(() => {
    async function fetchTask() {
      try {
        const res = await axios.get(`https://task-manager-sghe.onrender.com/tasks/${params.id}`);
        const { Summary, Assignee, Reporter, Priority, Status } = res.data;
        setTask({ Summary, Assignee, Reporter, Priority, Status });
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    }
    fetchTask();
  }, [params.id]);

  const updateTaskHandler = async (e) => {
    e.preventDefault();

    const updatedTask = {
      Summary: summaryRef.current.value,
      Assignee: assigneeRef.current.value,
      Reporter: reporterRef.current.value,
      Priority: priorityRef.current.value,
      Status: statusRef.current.value
    };

    try {
      await axios.patch(`https://task-manager-sghe.onrender.com/tasks/${params.id}`, updatedTask);
      navigate(`/issue`);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <form onSubmit={updateTaskHandler} className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-6">EDIT TASK</h1>

      <div className="mb-4">
        <label htmlFor="summary" className="block text-gray-700 font-semibold mb-2">Summary</label>
        <input
          type="text"
          id="summary"
          className="w-full p-3 border border-gray-300 rounded"
          placeholder="Enter task summary"
          ref={summaryRef}
          defaultValue={task.Summary}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="assignee" className="block text-gray-700 font-semibold mb-2">Assignee</label>
        <input
          type="text"
          id="assignee"
          className="w-full p-3 border border-gray-300 rounded"
          placeholder="Enter assignee name"
          ref={assigneeRef}
          defaultValue={task.Assignee}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="reporter" className="block text-gray-700 font-semibold mb-2">Reporter</label>
        <input
          type="text"
          id="reporter"
          className="w-full p-3 border border-gray-300 rounded"
          placeholder="Enter reporter name"
          ref={reporterRef}
          defaultValue={task.Reporter}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block text-gray-700 font-semibold mb-2">Priority</label>
        <select
          id="priority"
          className="w-full p-3 border border-gray-300 rounded"
          ref={priorityRef}
          defaultValue={task.Priority}
        >
          <option value="High">High</option>
          <option value="Very High">Very High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="Very Low">Very Low</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="status" className="block text-gray-700 font-semibold mb-2">Status</label>
        <select
          id="status"
          className="w-full p-3 border border-gray-300 rounded"
          ref={statusRef}
          defaultValue={task.Status}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
        Update
      </button>
    </form>
  );
};

export default EditTask;
