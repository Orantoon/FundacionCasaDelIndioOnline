import {pool} from '../db.js'

export const getDonationsUser = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Donation WHERE user = ?', [req.params.user]);
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Donation not found'      
        })
        
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const postDonation = async (req, res) => {
    const {user, campaign, details} = req.body
    const approved = 0 
    const approvalDateTime = null
    const approvedBy = null
    const currentDate = new Date();
    const dateTime = currentDate.toISOString().slice(0, 10)

    try {
        const [rows] = await pool.query('INSERT INTO Donation (user, campaign, details, dateTime, approved, approvalDateTime, approvedBy) VALUES (?, ?, ?, ?, ?, ?, ?)', [user, campaign, details, dateTime, approved, approvalDateTime, approvedBy])
        res.send({
            id: rows.insertId,
            user,
            campaign,
            details,
            dateTime,
            approved,
            approvalDateTime,
            approvedBy
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const approveDonation = async (req, res) => {
    const { id } = req.params;
    const {approved, approvedBy} = req.body;
    const currentDate = new Date();
    const approvalDateTime = currentDate.toISOString().slice(0, 10)

    try {
        const [result] = await pool.query(
            'UPDATE Donation SET approved = IFNULL(?, approved), approvalDateTime = IFNULL(?, approvalDateTime), approvedBy = IFNULL(?, approvedBy) WHERE id = ?',
            [approved, approvalDateTime, approvedBy, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Donation not found"
            });
        }

        const [rows] = await pool.query('SELECT * FROM Donation WHERE id = ?', [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        });
    }
};