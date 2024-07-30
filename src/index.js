import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route,Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/StudentListPage';
import AddStudent from './pages/addStudents';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EditStudent from './pages/editStudent';
import NotFound from './pages/NotFound';
import StudentListPage from './pages/StudentListPage';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='home' element={<Header/>}/>
          <Route path='add-student' element={<AddStudent/>}/>
          <Route path='student' element={<StudentListPage/>}>
            <Route path=':studentId' element={<h1>salam</h1>}/>

          </Route>
          <Route path='*' element={<NotFound/>}/>

          {/* <Route path='/student/:id' element={<EditStudent/>}/> */}
        
        </Route>
      </Routes>



    </BrowserRouter>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
