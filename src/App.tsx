import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ListUser from './Components/ListUser';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';

function App() {
  return (
      <div className="App">
            <BrowserRouter>
            <nav>
  <ul className="nav-links">
    <li>
      <Link to="/" className="btn btn-dark text-white rounded-0 me-2">Filmų sąrašas</Link>
    </li>
    <li>
      <Link to="user/create" className="btn btn-dark text-white rounded-0 me-2">Susikurk savo!</Link>
    </li>
  </ul>
</nav>         
          <Routes>
            <Route index element={<ListUser />} />
            <Route path="user/create" element={<CreateUser />} />
            <Route path="user/:ID/edit" element={<EditUser />} />
          </Routes>
          </BrowserRouter>
      
    </div>
  );
}

export default App;
