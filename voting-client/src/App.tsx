import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='create' element={<label>index</label>}/>
          <Route path=':id'>
            <Route path='vote' element={<label>vote</label>}/>  
            <Route path='results' element={<label>results</label>}/>
            <Route index element={<Navigate replace to="vote"/>}/> {/* REDIRECT TO VOTING PAGE IF NO PAGE WAS SPECIFIED */}
          </Route>
          <Route index element={<Navigate replace to="create"/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
