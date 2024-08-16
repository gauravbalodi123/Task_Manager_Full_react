import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed top-12 left-0 h-[calc(100vh-3rem)] bg-blue-800 p-4 w-64 overflow-y-auto">

      <div className="flex flex-col items-center">

        <div className="text-white text-lg mb-2 cursor-pointer hover:bg-gray-700 p-2 rounded w-full text-center">
          <Link to="/">HOME</Link>
        </div>

        <div className="text-white text-lg mb-2 cursor-pointer hover:bg-gray-700 p-2 rounded w-full text-center">
          <Link to="/issue">ISSUES</Link>
        </div>

        <div className="text-white text-lg mb-2 cursor-pointer hover:bg-gray-700 p-2 rounded w-full text-center">
          <Link to="/newissue">ADD TASKS</Link>
        </div>
        
      </div>

    </div>
  );
};

export default Sidebar;
