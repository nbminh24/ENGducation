import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import CourseCatalogScreen from './screens/CourseCatalogScreen';
import CourseDetailScreen from './screens/CourseDetailScreen/CourseDetailScreen';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/courses" element={<CourseCatalogScreen />} />
        <Route path="/courses/:id" element={<CourseDetailScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
