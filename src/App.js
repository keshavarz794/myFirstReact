import React from 'react';
import Layout from './components/layout/layout';
import { Outlet } from 'react-router';
import './App.css';



function App() {
  
  return (


      <div className="App">
      
      <Layout/>
      
      <Outlet/>
      </div>
      
  );
}

export default App;
