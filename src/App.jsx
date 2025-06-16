import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Videos from './Components/Videos';
import Upload from './Components/Upload';

function App() {
  return (
    <>
      {/* <Button >Click</Button> */}
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/upload" element={<Upload/>}/>
      </Routes>
    </>
  );
}

export default App;

// Define your Home and About components or import them if they are defined elsewhere


