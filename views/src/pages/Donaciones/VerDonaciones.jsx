import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './VerDonaciones.css';

const VerDonaciones = () => {
    const [donations, setDonations] = useState([]);
    const [search, setSearch] = useState('');
    const [approved, setApproved] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchDonations = () => {
        // Simulación de llamada a API para obtener los usuarios
        const fetchedDonations = [
            { id: 1, type: 'Utiles escolares', user: 'Rogelio Perez', campaign: 'Inicio de clases', details: '20 cuadernos', amount: '0', date: '2024-05-01', approved: true, approvaldate: '2024-05-01', approvedby: 'Cesar'},
            { id: 2, type: 'ropa', user: 'Eunice Chavez', campaign: '', details: '5 camisas y 3 pantalones', amount: '0', date: '2024-05-01', approved: false, approvaldate: '2024-05-01', approvedby: 'Cesar'},
            // Otros usuarios...
        ];
        setDonations(fetchedDonations);
    };

    useEffect(() => {
        fetchDonations();
    }, [location]);

    const handleReloadDonations = () => {
        fetchDonations();
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCheckboxClick = (id) => {
        setApproved(
            

        );
    };

    return (
        <div className="ver-donaciones">
            <h2>Ver Donaciones</h2>
            <div className="ver-donaciones-actions">
                <button onClick={handleReloadDonations}>Recargar Donaciones</button>
                <input
                    type="text"
                    placeholder="Buscar donacion por usuario..."
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Tipo</th>
                        <th>Campaña</th>
                        <th>Detalles</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th>Aprobación</th>
                        <th>Aprobado por</th>
                    </tr>
                </thead>
                <tbody>
                {donations.filter(donation => donation.user.toLowerCase().includes(search.toLowerCase())).map(donation => (
                    <tr key={donation.id}>
                        <td>{donation.user}</td>
                        <td>{donation.type}</td>
                        <td>{donation.campaign}</td>
                        <td>{donation.details}</td>
                        <td>{donation.amount}</td>
                        <td>{donation.date}</td>
                        <td>
                            <input
                                type="checkbox"
                                checked={donation.approved}
                                onChange={() => handleCheckboxClick(donation.id)}
                            />
                        </td>
                        <td>{donation.approvedby}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default VerDonaciones;
