import {pool} from '../db.js'

export const getVisitlogs = async (req, res) => {
    try {
        //throw new Error("ERROR de prueba")
        const [rows] = await pool.query('SELECT * FROM Visitlog')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const getVisitlog = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Visitlog WHERE id = ?', [req.params.id]);
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Visitlog not found'      
        })
        
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const postVisitlog = async (req, res) => {
    const {user, community, name, details} = req.body
    const currentDate = new Date();
    const dateTime = currentDate.toISOString().slice(0, 10)

    try {
        const [rows] = await pool.query('INSERT INTO Visitlog (user, community, name, details, dateTime) VALUES (?, ?, ?, ?, ?)', [user, community, name, details, dateTime])
        res.send({
            id: rows.insertId,
            user,
            community,
            name,
            details,
            dateTime
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const updateVisitlog = async (req, res) => {
    const { id } = req.params;
    const {user, community, name, details} = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE Visitlog SET user = IFNULL(?, user), community = IFNULL(?, community), name = IFNULL(?, name), details = IFNULL(?, details) WHERE id = ?',
            [user, community, name, details, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Visitlog not found"
            });
        }

        const [rows] = await pool.query('SELECT * FROM Visitlog WHERE id = ?', [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        });
    }
};

export const deleteVisitlog = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM Visitlog WHERE id = ?', [req.params.id])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Visitlog not found'
        })
        
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};