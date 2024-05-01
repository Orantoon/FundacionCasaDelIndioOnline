import {pool} from '../db.js'

export const getFundacion = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Fundation WHERE id = ?', [req.params.id]);
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Fundation not found'      
        })
        
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const updateFundacion = async (req, res) => {
    const {id} = req.params;
    const {vision, history} = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE Fundation SET vision = IFNULL(?, vision), history = IFNULL(?, history) WHERE id = ?',
            [vision, history, id]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: "Fundation not found"
        })

        const [rows] = await pool.query('SELECT * FROM Fundation WHERE id = ?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};
