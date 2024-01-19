import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectGallery from './pages/ProjectGallery';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-gallery" element={<ProjectGallery />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
