import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Donacion.css';
import { useGet } from '../../useGet';
import { postData } from '../../postData';

const Donacion = () => {
    // GET Users
    const { variable: users } = useGet('http://localhost:4000/api/usuario');
    const userId = sessionStorage.getItem('userId');
    // GET Campaigns
    const { variable: campaigns } = useGet('http://localhost:4000/api/donationcampaign');

    const navigate = useNavigate();
    const [campaignDonacion, setCampaignDonacion] = useState(null);
    const [details, setDetails] = useState('');
    const [alertaDonation, setAlertaDonation] = useState(false);

    const handleCampaignChange = (e) => {
        setCampaignDonacion(e.target.value);
    };

    const handleDetailsChange = (e) => {
        setDetails(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (campaignDonacion === 'Select Campaign'){
            setCampaignDonacion(null);
        } 

        const donation = {
            user: parseInt(sessionStorage.getItem('userId'), 10),
            details: details, 
            campaign: campaignDonacion
        };

        console.log(donation)

        postData('http://localhost:4000/api/donation', donation)
        .then(data => {
            console.log('Success:', data);
            navigate('/'); // Regresa a la página Home
        })
        .catch(error => {
            console.error('Error:', error);
            setAlertaDonation(true);
            setTimeout(() => {
                setAlertaDonation(false);
            }, 3000);
        });
    };

    const handleVerDonaciones = () => {
        navigate('/verdonaciones');
      };

    return (
        <div className="donacion">
        {users && users.find(user => user.id === parseInt(userId, 10))?.isAdmin === 1 && (
            <button onClick={handleVerDonaciones}>Ver Donaciones</button>
        )}
            <h2>Hacer Donación</h2>
            <form onSubmit={handleSubmit}>
                <br />
                <label>
                    Campaign:
                    <select onChange={handleCampaignChange}>
                        <option>Select Campaign</option>
                        {campaigns && campaigns.map(campaign => (
                            <option key={campaign.id} value={campaign.id}>{campaign.name}</option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Details:
                    <textarea value={details} onChange={handleDetailsChange} />
                </label>
                <br />
                <button type="submit">Donate</button>
            </form>
            {alertaDonation && 
                <div className="alert">
                Ocurrió un error al crear la donación, por favor inténtelo de nuevo.
                </div>
            }
        </div>
    );
};

export default Donacion;