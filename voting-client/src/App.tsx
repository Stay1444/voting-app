import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import CreatePage from './pages/CreatePage';
import ResultsPage from './pages/ResultsPage';
import VotePage from './pages/VotePage';
import { ThemeContextProvider } from './ThemeContext';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='create' element={<CreatePage/>}/>
            <Route path=':id'>
              <Route path='vote' element={<VotePage/>}/>  
              <Route path='results' element={<ResultsPage/>}/>
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
