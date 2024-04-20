import {pool} from '../db.js'

export const getDonacionesUsuario = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Donation WHERE user = ?', [req.params.user]);
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'User not found'      
        })
        
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const postDonacion = async (req, res) => {
    const {type, user, campaign, details, ammount, date, approval, approval_date, approvedBy} = req.body

    try {
        const [rows] = await pool.query('INSERT INTO Donation (type, user, campaign, details, ammount, date, approval, approval_date, approvedBy) VALUES (?, ?)', [type, user, campaign, details, ammount, date, approval, approval_date, approvedBy])
        res.send({
            id: rows.insertId,
            type,
            user,
            campaign,
            details,
            ammount,
            date,
            approval,
            approval_date,
            approvedBy
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};