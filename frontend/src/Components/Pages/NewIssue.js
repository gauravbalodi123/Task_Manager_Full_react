import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewIssue = () => {

  const navigate = useNavigate();

  const summaryRef = useRef();
  const assigneeRef = useRef();
  const reporterRef = useRef();
  const priorityRef = useRef();
  const statusRef = useRef();

  const addIssueHandler = async (e) => {
    e.preventDefault();
    //  console.log(summaryRef.current.value);
    //  console.log(priorityRef.current.value);

    // Summary,Assignee,Reporter,Priority,Status 

    const Summary = summaryRef.current.value;
    const Assignee = assigneeRef.current.value;
    const Reporter = reporterRef.current.value;
    const Priority = priorityRef.current.value
    const Status = statusRef.current.value;

    try {
      await axios.post('https://task-manager-sghe.onrender.com/addTasks', { Summary, Assignee, Reporter, Priority, Status });
      navigate('/issue');
    }
    catch (e) {
      console.log('cannot create your issue at the moment');
    }



  }



  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">

      <h2 className="text-2xl font-bold mb-6">Create New Issue</h2>

      <form onSubmit={addIssueHandler}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Summary</label>
          <input
            ref={summaryRef}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter issue summary"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Assignee</label>
          <input
            ref={assigneeRef}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter assignee name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Reporter</label>
          <input
            ref={reporterRef}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter reporter name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Priority</label>
          <select
            ref={priorityRef}
            className="w-full p-2 border border-gray-300 rounded"
          >

            <option value="High">High</option>
            <option value="Very High">Very High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="Very Low">Very Low</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Status</label>
          <select
            ref={statusRef}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <button
          type="submit"

          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Create
        </button>
      </form>


    </div>
  );
};

export default NewIssue;
