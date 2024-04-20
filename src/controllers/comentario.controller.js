import {pool} from '../db.js'

export const getComentarioPublicacion = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Comment WHERE post = ?', [req.params.post]);
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'      
        })
        
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

// --------- CAMBIAR -----------
export const postComentario = async (req, res) => {
    const {name, salary} = req.body

    try {
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const deleteComentario = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM Comment WHERE id = ?', [req.params.id])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
        
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};