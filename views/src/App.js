import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import SobreNosotros from './pages/SobreNosotros/SobreNosotros';
import Comunidades from './pages/Comunidades/Comunidades';
import Publicaciones from './pages/Publicaciones/Publicaciones';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Bitacora from './pages/Admin/Bitacora/Bitacora';
import AddBitacora from './pages/Admin/Bitacora/AddBitacora';
import ViewBitacora from './pages/Admin/Bitacora/ViewBitacora';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/comunidades" element={<Comunidades />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/bitacora-options" element={<Bitacora/>} />
        <Route path="/add-bitacora" element={<AddBitacora />} />
        <Route path="/view-bitacora" element={<ViewBitacora />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
