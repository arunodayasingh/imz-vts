// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/Dashboard/dashboard';

function App() {

  const [token,setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken}/>
  // }

  
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard"  element={<Dashboard/>}/>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
