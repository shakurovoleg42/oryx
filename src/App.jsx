// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './Pages/Main';
import { About } from './Pages/About/About';
import { PopularShops } from './Pages/PopularShops/PopularShops'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular-shops" element={<PopularShops />} />
      </Routes>
    </Router>
  );
}

export default App;
