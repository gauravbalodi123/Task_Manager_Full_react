import React, { useState, useEffect } from 'react';
import Tas from '../Tas/Tas';
import axios from 'axios';

const Issues = () => {
    // const DUMMY_TASKS = [
    //     {
    //         Summary: 'API changes',
    //         Assignee: 'Gaurav',
    //         Reporter: 'Abhishek',
    //         Priority: 'High',
    //         Status: 'Todo'
    //     },
    //     {
    //         Summary: 'API changes',
    //         Assignee: 'Raj',
    //         Reporter: 'Aarushi',
    //         Priority: 'Medium',
    //         Status: 'Todo'
    //     },
    //     {
    //         Summary: 'API changes',
    //         Assignee: 'Ratan',
    //         Reporter: 'Kamal',
    //         Priority: 'Very High',
    //         Status: 'Todo'
    //     }
    // ];

    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getAllIssues() {
        try {
            const res = await axios.get('https://task-manager-sghe.onrender.com/allTasks')
            //    console.log(res);
            setTasks(res.data);
            setIsLoading(false);
        }
        catch (e) {
            console.log('cannot fetch issues at the moment')
        }
    }

    useEffect(() => {
        getAllIssues();
    }, [])



    return (
        <div className="p-4">

            {/* <div className="flex justify-center mb-4">
                <h1 className="text-2xl font-bold">Issue</h1>
            </div> */}

            {
                isLoading ?
                    <p>the issue are still loading</p> :
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr >
                                    <th className="py-2 px-4 border border-black text-center text-lg">Summary</th>
                                    <th className="py-2 px-4 border border-black text-center text-lg">Assignee</th>
                                    <th className="py-2 px-4 border border-black text-center text-lg">Reporter</th>
                                    <th className="py-2 px-4 border border-black text-center text-lg">Priority</th>
                                    <th className="py-2 px-4 border border-black text-center text-lg">Status</th>
                                    <th className="py-2 px-4 border border-black text-center text-lg">Actions</th>
                                </tr>
                            </thead>


                            <tbody>
                                {tasks.map((task) => (
                                    <Tas
                                        key={task._id}
                                        Summary={task.Summary}
                                        Assignee={task.Assignee}
                                        Reporter={task.Reporter}
                                        Priority={task.Priority}
                                        Status={task.Status}
                                        id={task._id}
                                    />
                                ))}
                            </tbody>

                        </table>







                    </div>
            }



        </div>
    );
};

export default Issues