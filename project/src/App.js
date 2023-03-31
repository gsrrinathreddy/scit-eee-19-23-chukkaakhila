import React from 'react';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutUs from './Pages/AboutUs';
import Experience from './Pages/Experience';
import Qualifications from './Pages/Qualifications';
import Skills from './Pages/Skills';
import Hobbies from './Pages/Hobbies';
import './App.css';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path ="AboutUs"element={<AboutUs/>}/>
        <Route path ="Experience"element={<Experience/>}/>
        <Route path ="Qualifications"element={<Qualifications/>}/>
        <Route path ="Skills"element={<Skills/>}/>
        <Route path ="Hobbies"element={<Hobbies/>}/>
        </Routes>
        </BrowserRouter>

        
    </div>
  );
}
export default App;