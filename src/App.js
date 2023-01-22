import Form from './Form';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Friends from './Friends';
import Signin from './Signin';
import { useState } from 'react';
function App() {
  let [users, setUsers] = useState([]);
  console.log(users);
  return (
    <div>
   
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="form">Home</NavLink>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="form">form</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Friends">Friends</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="signin">Sign In</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav >



      <Routes>
        <Route path="form" element={<Form setUsers={setUsers} users={users} />} />
        <Route path="friends" element={<Friends users={users} />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div >
  );
}

export default App;
