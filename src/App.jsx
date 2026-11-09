import React from 'react';
import Header from './components/Header';
import StudentsList from './components/StudentsList';
import Footer from './components/Footer';
import { students } from './data/students';
import './App.css';

function App() {
  return (
      <div className="app-container">
        <Header />
        <StudentsList students={students} />
        <Footer />
      </div>
  );
}

export default App;