import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdDelete, MdModeEdit } from "react-icons/md";

const Show = () => {
    const params = useParams();
    const navigate = useNavigate();

    const deleteTaskHandler = (id) => {
        axios.delete(`https://task-manager-sghe.onrender.com/tasks/${id}`)
            .then(response => {
                console.log('Task deleted successfully');
                navigate('/issue');
            })
            .catch(error => {
                console.error('Error deleting task:', error);
            });
    };

    const editTaskHandler = (id) => {
        navigate(`/tasks/edit/${id}`);
    };

    const [task, setTask] = useState({
        Summary: '',
        Assignee: '',
        Reporter: '',
        Priority: '',
        Status: ''
    });

    async function fetchATask() {
        const res = await axios.get(`https://task-manager-sghe.onrender.com/tasks/${params.id}`);
        const { Summary, Assignee, Reporter, Priority, Status } = res.data;
        setTask({ Summary, Assignee, Reporter, Priority, Status });
    }

    useEffect(() => {
        fetchATask();
    }, []);

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6">{task.Summary}</h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-700">Reporter</h2>
                    <p className="text-gray-900">{task.Reporter}</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-700">Assignee</h2>
                    <p className="text-gray-900">{task.Assignee}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-700">Priority</h2>
                    <p className="text-gray-900">{task.Priority}</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-700">Status</h2>
                    <p className="text-gray-900">{task.Status}</p>
                </div>
            </div>
            
            <div className="flex space-x-4">
                <button onClick={() => deleteTaskHandler(params.id)} className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
                    <MdDelete className="mr-2" /> Delete
                </button>
                <button onClick={() => editTaskHandler(params.id)} className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                    <MdModeEdit className="mr-2" /> Edit
                </button>
            </div>
        </div>
    );
};

export default Show;
