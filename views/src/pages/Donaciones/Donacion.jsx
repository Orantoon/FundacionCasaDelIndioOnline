import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Admin/GestionRoles/AuthContext';
import './Donacion.css';

const Donacion = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [campaign, setCampaign] = useState('');
    const [details, setDetails] = useState('');
    const [amount, setAmount] = useState('');

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCampaignChange = (e) => {
        setCampaign(e.target.value);
    };

    const handleDetailsChange = (e) => {
        setDetails(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform donation submission logic here
        console.log('Donation submitted!');
        console.log('Type:', type);
        console.log('Name:', name);
        console.log('Campaign:', campaign);
        console.log('Details:', details);
        console.log('Amount:', amount);
        // Reset form fields
        setType('');
        setName('');
        setCampaign('');
        setDetails('');
        setAmount('');
    };

    const handleVerDonaciones = () => {
        navigate('/verdonaciones');
      };

    return (
        <div className="donacion">
        {user && user.role === 'Admin' && (
            <button onClick={handleVerDonaciones}>Ver Donaciones</button>
        )}
            <h2>Hacer Donación</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Type:
                    <select value={type} onChange={handleTypeChange}>
                        <option value="">Select Type</option>
                        <option value="One-time">One-time</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </label>
                <br />
                <label>
                    Campaign:
                    <select value={campaign} onChange={handleCampaignChange}>
                        <option value="">Select Campaign</option>
                        <option value="Campaign A">Campaign A</option>
                        <option value="Campaign B">Campaign B</option>
                        <option value="Campaign C">Campaign C</option>
                    </select>
                </label>
                <br />
                <label>
                    Details:
                    <textarea value={details} onChange={handleDetailsChange} />
                </label>
                <br />
                <label>
                    Amount:
                    <input type="number" value={amount} onChange={handleAmountChange} />
                </label>
                <br />
                <button type="submit">Donate</button>
            </form>
        </div>
    );
};

export default Donacion;