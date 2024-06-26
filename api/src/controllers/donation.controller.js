import {pool} from '../db.js'

export const getDonations = async (req, res) => {
    try {
        //throw new Error("ERROR de prueba")
        const [rows] = await pool.query('SELECT * FROM Donation')
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
    const offset = currentDate.getTimezoneOffset() * 60000;
    const localDate = new Date(currentDate.getTime() - offset);
    const dateTime = localDate.toISOString().slice(0, 19).replace('T', ' ');

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
    const offset = currentDate.getTimezoneOffset() * 60000;
    const localDate = new Date(currentDate.getTime() - offset);
    const approvalDateTime = localDate.toISOString().slice(0, 19).replace('T', ' ');

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