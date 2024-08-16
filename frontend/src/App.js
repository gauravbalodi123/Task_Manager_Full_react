import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainNavigation from './Components/MainNavigation/MainNavigation';
// import Board from './Components/Pages/Board';
import Issues from './Components/Pages/Issues';
import NewIssue from './Components/Pages/NewIssue';
import SideNavigation from './Components/MainNavigation/SideNavigation';
import Show from './Components/Pages/Show';
import Edittasks from './Components/Pages/Edittasks';
import Main from './Components/Pages/Mainpage';

const App = () => {
  return (
    <Fragment>
      <MainNavigation />
      <div className="flex mt-12">
        <SideNavigation />

        <div className="flex-grow ml-64 p-4 overflow-x-auto"> {/* Updated margin-left */}

          <Routes>
            {/* <Route path="/board" element={<Board />} /> */}
            <Route path="/issue" element={<Issues />} />
            <Route path='/newissue' element={<NewIssue />} />
            <Route path='/tasks/:id' element={<Show />} />
            <Route path='/tasks/edit/:id' element={<Edittasks />} />
            <Route path='/' element={<Main/>} />
          </Routes>

        </div>

      </div>
      
    </Fragment>
  );
};

export default App;
