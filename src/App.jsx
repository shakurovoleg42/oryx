import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './Pages/Main';
import { About } from './Pages/about/About'; 
import { PopularShops } from './Pages/popularShops/PopularShops';
import { ScrollToTop } from './components/functions/ScrollToTop';

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular-shops" element={<PopularShops />} />
      </Routes>
    </Router>
  );
}

export default App;
