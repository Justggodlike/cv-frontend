import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
        </Layout>
      </Router> */}
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
      </Router>
    </>
    
  //   <Router>
  //   <Navbar />
  //   <Switch>
  //     <Route path='/' exact component={Home} />
  //   </Switch>
  // </Router>

  );
}

export default App;
