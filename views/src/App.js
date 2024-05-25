import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import SobreNosotros from './pages/SobreNosotros/SobreNosotros';
import Comunidades from './pages/Comunidades/Comunidades';
import Publicaciones from './pages/Publicaciones/Publicaciones';
import PublicacionDetail from './components/Modal/Modal';
import EditarPublicacion from './pages/Publicaciones/EditarPublicaciones/EditarPublicacion';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Bitacora from './pages/Admin/Bitacora/Bitacora';
import AddBitacora from './pages/Admin/Bitacora/AddBitacora';
import ViewBitacora from './pages/Admin/Bitacora/ViewBitacora';
import UserManagement from './pages/Admin/GestionUsuarios/UserManagement';
import UserDetails from './pages/Admin/GestionUsuarios/UserDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './pages/Admin/GestionRoles/AuthContext';
import AdminLogin from './pages/Login/Simulation/AdminLogin';
import CrearPublicaciones from './pages/Publicaciones/CrearPublicaciones/CreatePublicacion';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/comunidades" element={<Comunidades />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route path="/publicaciones/:id" element={<PublicacionDetail />} />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/bitacora-options" element={<Bitacora />} />
          <Route path="/add-bitacora" element={<AddBitacora />} />
          <Route path="/view-bitacora" element={<ViewBitacora />} />
          <Route path="/gestion-usuarios" element={<UserManagement />} />
          <Route path="/gestion-usuarios/:userId" element={<UserDetails />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/crear-publicacion" element={<CrearPublicaciones />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
