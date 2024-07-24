
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import EditTask from './pages/EditTask'; // Import the EditTask component


function App() {
  const [page, setPage] = useState('login');

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={page === 'login' ? <LoginPage setPage={setPage} /> : <RegisterPage setPage={setPage} />} />
        <Route path="/home" element={<HomePage setPage={setPage} />} />
        <Route path="/login" element={<LoginPage setPage={setPage} />} />
        <Route path="/edit-task/:taskId" element={<EditTask />} />
      </Routes>
    </Router>      
    </>
  )
}

export default App
