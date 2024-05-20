import {pool} from '../db.js'

export const getCommunities = async (req, res) => {
    try {
        //throw new Error("ERROR de prueba")
        const [rows] = await pool.query('SELECT * FROM Community')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const getCommunity = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Community WHERE id = ?', [req.params.id]);
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Community not found'      
        })
        
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const postCommunity = async (req, res) => {
    const {name, text, tribe} = req.body

    try {
        const [rows] = await pool.query('INSERT INTO Community (name, text, tribe) VALUES (?, ?, ?)', [name, text, tribe])
        res.send({
            id: rows.insertId,
            name,
            text,
            tribe
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const updateCommunity = async (req, res) => {
    const { id } = req.params;
    const {name, text, tribe} = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE Community SET name = IFNULL(?, name), text = IFNULL(?, text), tribe = IFNULL(?, tribe) WHERE id = ?',
            [name, text, tribe, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Community not found"
            });
        }

        const [rows] = await pool.query('SELECT * FROM Community WHERE id = ?', [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        });
    }
};

export const deleteCommunity = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM Community WHERE id = ?', [req.params.id])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Community not found'
        })
        
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};