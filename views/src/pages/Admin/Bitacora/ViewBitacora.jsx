import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewBitacora.css'; // Asegúrate de tener este archivo en tu proyecto

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
  const [bitacoraData, setBitacoraData] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      const totalEntries = allBitacoraData.length;
      setTotalPages(Math.ceil(totalEntries / PAGE_SIZE));
      const startIdx = (currentPage - 1) * PAGE_SIZE;
      const endIdx = startIdx + PAGE_SIZE;
      setBitacoraData(allBitacoraData.slice(startIdx, endIdx));
    };

    fetchData();
  }, [currentPage]);

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
              <th>Cédula</th>
              <th>Comunidad</th>
              <th>Motivo</th>
            </tr>
          </thead>
          <tbody>
            {bitacoraData.map((entry) => (
              <tr key={entry.id} onClick={() => handleRowClick(entry)}>
                <td>{entry.nombre}</td>
                <td>{entry.cedula}</td>
                <td>{entry.comunidad}</td>
                <td>{entry.motivo}</td>
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
            <p><strong>Nombre:</strong> {selectedEntry.nombre}</p>
            <p><strong>Cédula:</strong> {selectedEntry.cedula}</p>
            <p><strong>Comunidad:</strong> {selectedEntry.comunidad}</p>
            <p><strong>Motivo:</strong> {selectedEntry.motivo}</p>
            <button className="btn" onClick={() => setSelectedEntry(null)}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewBitacora;
