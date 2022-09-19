import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import Layout from './pages/Layout';
import Services from './pages/Services';
import About from './pages/About';

const theme = {
  text: "#e6e6e6",
  subtext: "#808080",
  focus: "#c49b63",
  black: "#121212"
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/gastro-react-app' element={<Layout/>}>
              <Route index element={<Home />} />
              {/* <Route path="/" element={<Navigate to="/gastro-react-app" />} /> */}
              <Route path="menu" element={<Menu/>} />
              <Route path="services" element={<Services />} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts/>} />
              <Route path="cart" element={<Cart/>} />
            </Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
