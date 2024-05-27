import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import SobreNosotros from './pages/SobreNosotros/SobreNosotros';
import Comunidades from './pages/Comunidades/Comunidades';
import Publicaciones from './pages/Publicaciones/Publicaciones';
import PublicacionDetail from './components/Modal/Modal';
import Idiomas from './pages/Idiomas/Idiomas';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Bitacora from './pages/Admin/Bitacora/Bitacora';
import AddBitacora from './pages/Admin/Bitacora/AddBitacora';
import ViewBitacora from './pages/Admin/Bitacora/ViewBitacora';
import UserManagement from './pages/Admin/GestionUsuarios/UserManagement';
import UserDetails from './pages/Admin/GestionUsuarios/UserDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './pages/Admin/GestionRoles/AuthContext';
import CrearPublicaciones from './pages/Publicaciones/CrearPublicaciones/CreatePublicacion';
import Donacion from './pages/Donaciones/Donacion';
import VerDonaciones from './pages/Donaciones/VerDonaciones';
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
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage images={images}/>} />
          <Route path="/sobre-nosotros" element={<SobreNosotros images={images}/>} />
          <Route path="/comunidades" element={<Comunidades images={images}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/idiomas" element={<Idiomas images={images}/>} />
          <Route path="/publicaciones" element={<Publicaciones images={images}/>} />
          <Route path="/publicaciones/:id" element={<PublicacionDetail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/bitacora-options" element={<Bitacora />} />
          <Route path="/add-bitacora" element={<AddBitacora />} />
          <Route path="/view-bitacora" element={<ViewBitacora />} />
          <Route path="/gestion-usuarios" element={<UserManagement />} />
          <Route path="/gestion-usuarios/:userId" element={<UserDetails />} />
          <Route path="/crear-publicacion" element={<CrearPublicaciones />} />
          <Route path="/donacion" element={<Donacion />} />
          <Route path="/verdonaciones" element={<VerDonaciones />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
