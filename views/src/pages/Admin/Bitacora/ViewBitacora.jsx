import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewBitacora.css'; // Asegúrate de tener este archivo en tu proyecto
import { useGet } from '../../../useGet';

// Datos simulados de la bitácora
const allBitacoraData = [
  { id: 1, nombre: 'Juan Perez', cedula: '12345678', comunidad: 'Comunidad A', motivo: 'Consulta' },
  { id: 2, nombre: 'Maria Lopez', cedula: '87654321', comunidad: 'Comunidad B', motivo: 'Asesoría' },
  // Agrega más datos aquí
  { id: 3, nombre: 'Carlos Martinez', cedula: '13579246', comunidad: 'Comunidad C', motivo: 'Consulta' },
  { id: 4, nombre: 'Ana Gómez', cedula: '24681357', comunidad: 'Comunidad D', motivo: 'Asesoría' },
  { id: 5, nombre: 'Luis Rojas', cedula: '98765432', comunidad: 'Comunidad E', motivo: 'Consulta' },
  { id: 6, nombre: 'Carmen Silva', cedula: '56789012', comunidad: 'Comunidad F', motivo: 'Asesoría' },
  { id: 7, nombre: 'Pedro Blanco', cedula: '67890123', comunidad: 'Comunidad G', motivo: 'Consulta' },
  { id: 8, nombre: 'Laura Torres', cedula: '89012345', comunidad: 'Comunidad H', motivo: 'Asesoría' },
  { id: 9, nombre: 'Miguel Fernández', cedula: '90123456', comunidad: 'Comunidad I', motivo: 'Consulta' },
  { id: 10, nombre: 'Rosa Sánchez', cedula: '11223344', comunidad: 'Comunidad J', motivo: 'Asesoría' },
  { id: 11, nombre: 'Daniel Ramírez', cedula: '22334455', comunidad: 'Comunidad K', motivo: 'Consulta' },
];

const PAGE_SIZE = 3;

function ViewBitacora() {

  // GET Visit Logs
  const {variable: visitlogs} = useGet('http://localhost:4000/api/visitlog');
  // GET Users
  const {variable: users} = useGet('http://localhost:4000/api/usuario');
  // GET Communities
  const {variable: communities} = useGet('http://localhost:4000/api/community');

  const [bitacoraData, setBitacoraData] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (visitlogs) {
      const fetchData = () => {
        const totalEntries = visitlogs.length;
        setTotalPages(Math.ceil(totalEntries / PAGE_SIZE));
        const startIdx = (currentPage - 1) * PAGE_SIZE;
        const endIdx = startIdx + PAGE_SIZE;
        setBitacoraData(visitlogs.slice(startIdx, endIdx));
      };
  
      fetchData();
    }
  }, [visitlogs, currentPage]);
  

  const handleRowClick = (entry) => {
    setSelectedEntry(entry);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleBackToBitacora = () => {
    navigate('/bitacora-options');
  };

  return (
    <div className="view-bitacora-container">
      <div className="view-bitacora-table">
        <h2 className="table__title">Registros de la Bitácora</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Detalles</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {bitacoraData.map((entry) => (
              <tr key={entry.id} onClick={() => handleRowClick(entry)}>
                <td>{entry.name}</td>
                <td>{entry.details}</td>
                <td>{new Date(entry.dateTime).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
          <span>Página {currentPage} de {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
        </div>
        <button className="btn-back" onClick={handleBackToBitacora}>Regresar a Bitácora</button>
        {selectedEntry && (
          <div className="entry-details">
            <h3>Detalles del Registro</h3>
            <p><strong>Nombre:</strong> {selectedEntry.name}</p>
            <p><strong>Detalles:</strong> {selectedEntry.details}</p>
            <p><strong>Comunidad:</strong> {communities && communities.find(community => community.id === selectedEntry.community).name}</p>
            <p><strong>Encargado:</strong> {users && users.find(user => user.id === selectedEntry.user).name}</p>
            <p><strong>Fecha:</strong> {new Date(selectedEntry.dateTime).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
            <button className="btn" onClick={() => setSelectedEntry(null)}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewBitacora;
