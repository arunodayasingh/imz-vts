// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Sidebar from './components/common/sidebar/sidebar';
import { BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Login from './components/login/login';
import Navbar from "./components/common/navbar/navbar"
import Dashboard from './components/Dashboard/dashboard';
import AppBaar from './components/common/navbar/appbar';
import About from './components/About/about';
import Commnets from './components/Comments/commnets';
import { AppBar } from '@mui/material';

function App() {

  const [token,setToken] = useState(false);

 

  
  return (
    // <div className="App">

    <Router>
     
       <Sidebar>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/"  element={<Dashboard/>}/>

          <Route path="/about"  element={<About/>}/> 
          <Route path="/commnet"  element={<Commnets/>}/>

        </Routes>
      </Sidebar>
      {/* }  */}
      
      </Router>
    // </div>
  ); 
}

export default App;
