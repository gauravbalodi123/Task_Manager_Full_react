import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-800 px-4 h-12 flex items-center z-10">
      <div className="mr-6">
        <button className="flex items-center bg-white text-black-800 rounded-full px-4 py-1">
          FocusFlow
        </button>
      </div>
      <div className="flex-grow flex justify-center">
        <input
          type="text"
          placeholder="Search My workspace"
          className="bg-white text-blue rounded-full px-4 py-1 w-1/2"
        />
      </div>
      <div className="ml-4">
        <div className="bg-white rounded-full p-2">
          <Link to="/"> <FaUserAlt /> </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
