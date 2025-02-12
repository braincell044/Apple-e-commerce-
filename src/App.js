import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Store from './Store';
import Home from './Home';
import BigHead from './BigHead';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div>
      <BigHead />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;