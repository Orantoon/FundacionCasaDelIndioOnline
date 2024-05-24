import React from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import SobreNosotros from './pages/SobreNosotros/SobreNosotros';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  // GET Fundacion
  const [fundacion, setFundacion] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:4000/api/fundacion/0')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setFundacion(data);
    });
  }, []);

  const images = require.context('./imgs', true);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros fundacion={fundacion} images={images}/>} />
      </Routes>
    </Router>
  );
}


export default App;