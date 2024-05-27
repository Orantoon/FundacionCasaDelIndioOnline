import React, { useState, useEffect } from 'react';
import './VerDonaciones.css';
import { useGet } from '../../useGet';
import { putData } from '../../putData';

const VerDonaciones = () => {
    // GET Donations
    const {variable: donations} = useGet('http://localhost:4000/api/donation');
    // GET Users
    const {variable: users} = useGet('http://localhost:4000/api/usuario');
    const userId = parseInt(sessionStorage.getItem('userId'), 10);

    const [search, setSearch] = useState('');
    const [alertaApprove, setAlertaApprove] = useState(false);
    const [alertaApproveYS, setAlertaApproveYS] = useState(false);

    const handleReloadDonations = () => {
        window.location.reload();
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCheckboxClick = (id) => {
        if (donations.filter(donation => donation.id === id)[0].user === userId) {
            setAlertaApproveYS(true);
            setTimeout(() => {
                setAlertaApproveYS(false);
            }, 3000);
        } else { 
            const approval = {
                approved: 1,
                approvedBy: userId
            };

            putData('http://localhost:4000/api/donation/' + id, approval)
                .then(data => {
                    console.log('Success:', data);
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Error:', error);

                    setAlertaApprove(true);
                    setTimeout(() => {
                        setAlertaApprove(false);
                    }, 3000);
                });}
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
                        <th>Campaña</th>
                        <th>Detalles</th>
                        <th>Fecha</th>
                        <th>Aprobación</th>
                        <th>Aprobado por</th>
                        <th>Fecha Aprobación</th>
                    </tr>
                </thead>
                <tbody>
                {donations && users && donations.filter(donation => users.find(user => user.id === donation.user).name.toLowerCase().includes(search.toLowerCase())).map(donation => (
                    <tr key={donation.id}>
                        <td>{users.find(user => user.id === donation.user).name}</td>
                        <td>{donation.campaign}</td>
                        <td>{donation.details}</td>
                        <td>{new Date(donation.dateTime).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                        <td>
                            {donation.approved != 1 ? (
                                <button onClick={() => handleCheckboxClick(donation.id)}>Aprobar</button>
                            ) : (
                                <p>Aprobado</p>
                            )}
                        </td>
                        <td>{users && donation.approved === 1 && users.find(user => user.id === donation.approvedBy).name}</td>
                        <td>{donation.approved === 1 && new Date(donation.approvalDateTime).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {alertaApprove && 
                <div className="alert">
                Ocurrió un error a la hora de aprobar la donación, por favor inténtelo de nuevo.
                </div>
            }
            {alertaApproveYS && 
                <div className="alert">
                No se puede aprobar su propia donación!
                </div>
            }
        </div>
    );
};

export default VerDonaciones;
