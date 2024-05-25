import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import SobreNosotros from './pages/SobreNosotros/SobreNosotros';
import Comunidades from './pages/Comunidades/Comunidades';
import Publicaciones from './pages/Publicaciones/Publicaciones';
import Idiomas from './pages/Idiomas/Idiomas';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Bitacora from './pages/Admin/Bitacora/Bitacora';
import AddBitacora from './pages/Admin/Bitacora/AddBitacora';
import ViewBitacora from './pages/Admin/Bitacora/ViewBitacora';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  // Usuario Loggeado
  React.useEffect(() => {
    // Verifica si ya hay un ID de usuario en el almacenamiento de sesión
    const userId = sessionStorage.getItem('userId');

    // Si no hay un ID de usuario almacenado, se pone -1 como default
    if (!userId) {
      sessionStorage.setItem('userId', -1);
      return;
    }
  }, []);

  // Idioma de la Pagina
  React.useEffect(() => {
    // Verifica si ya hay un Idioma en el almacenamiento de sesión
    const idioma = sessionStorage.getItem('idioma');

    // Si no hay un ID de usuario almacenado, se pone -1 como default
    if (!idioma) {
      sessionStorage.setItem('idioma', 0);
      return;
    }
  }, []);

  // Images
  const images = require.context('./imgs', true);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros images={images}/>} />
        <Route path="/comunidades" element={<Comunidades images={images}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/idiomas" element={<Idiomas images={images}/>} />
        <Route path="/publicaciones" element={<Publicaciones images={images}/>} />
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
