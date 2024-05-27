import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewBitacora.css'; // Asegúrate de tener este archivo en tu proyecto
import { useGet } from '../../../useGet';

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
