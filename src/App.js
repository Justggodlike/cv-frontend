import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Messages from './components/pages/Messages';
import MockVacancy from './components/pages/MockVacancy';
import MockMessage from './components/pages/MockMessage';
import Applications from './components/pages/Applications';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddVacancy from './components/pages/AddVacancy';
import AddMessage from './components/pages/AddMessage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/messages" element={<Messages/>}/>
            <Route exact path="/vacancy/:id" element={<MockVacancy/>}/>
            <Route exact path="/message/:id" element={<MockMessage/>}/>
            <Route exact path="/applications" element={<Applications/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/vacancy/add" element={<AddVacancy/>}/>
            <Route exact path="/message/add/:id" element={<AddMessage/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
