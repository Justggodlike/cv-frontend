import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Messages from './components/pages/Messages';
import MockVacancy from './components/pages/MockVacancy';
import Applications from './components/pages/Applications';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            {/* <Route exact path="/messages" element={<Messages/>}/> */}
            <Route exact path="/messages" element={<MockVacancy/>}/>
            <Route exact path="/applications" element={<Applications/>}/>
            <Route exact path="/login" element={<Login/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
