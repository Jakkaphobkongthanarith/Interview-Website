import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Component/Header';
import Maincomp from './Component/Maincomp';
import Card from './Component/CardArea';
import Footer from './Component/Footer';
import Popup from './Component/Popup';
import FirstPage from './PageContainer/FirstPage';
import News from './PageContainer/News';
import Login from './PageContainer/Login';
import SignUp from './PageContainer/Signup';
import { Modal, Button } from 'react-bootstrap';
const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/news" element={<News />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      {isPopupVisible && <Popup />}
    </div>
  );
}

export default App;
