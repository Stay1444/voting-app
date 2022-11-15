import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import { ThemeContextProvider } from './ThemeContext';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
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
      </ThemeContextProvider>
    </div>
  );
}

export default App;
