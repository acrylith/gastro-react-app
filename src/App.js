import React from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contacts from './pages/Contacts';

import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';

const theme = {
  text: "#e6e6e6",
  subtext: "#808080",
  focus: "#c49b63",
  black: "#121212"
}

const grid = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px"
}

const App = () => {
  return (
    <ThemeProvider theme={theme} grid={grid}>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Menu" element={<Menu/>} />
            <Route path="/Contacts" element={<Contacts/>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
