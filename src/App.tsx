import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import CourseCatalogScreen from './screens/CourseCatalogScreen';
import CourseDetailScreen from './screens/CourseDetailScreen/CourseDetailScreen';
import FavoriteCoursesScreen from './screens/FavoriteCoursesScreen';
import HistoryScreen from './screens/HistoryScreen';
import SuggestionsScreen from './screens/SuggestionsScreen';
import MyCoursesScreen from './screens/MyCoursesScreen';
import ChatbotPopup from './components/ChatbotPopup';
import Toast from './components/Toast';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/courses" element={<CourseCatalogScreen />} />
        <Route path="/courses/:id" element={<CourseDetailScreen />} />
        <Route path="/favorites" element={<FavoriteCoursesScreen />} />
        <Route path="/history" element={<HistoryScreen />} />
        <Route path="/suggestions" element={<SuggestionsScreen />} />
        <Route path="/my-courses" element={<MyCoursesScreen />} />
      </Routes>
      <ChatbotPopup />
      <Toast />
    </Router>
  );
}

export default App;
