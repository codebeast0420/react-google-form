import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import FormPage from './Pages/FormPage';
function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
           <Route path='/form/:id' element = {<FormPage />} />
        </Routes>
      </Router>
   </>
   
  );
}

export default App;
