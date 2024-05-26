import {pool} from '../db.js'

export const getComment = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Comment WHERE post = ?', [req.params.post]);
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Comment not found'      
        })
        
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const postComment = async (req, res) => {
    const {user, post, text} = req.body
    const currentDate = new Date();
    const creationDateTime = currentDate.toISOString().slice(0, 10)

    try {
        const [rows] = await pool.query('INSERT INTO Comment (user, post, text, creationDateTime) VALUES (?, ?, ?, ?)', [user, post, text, creationDateTime])
        res.send({
            id: rows.insertId,
            user,
            post,
            text,
            creationDateTime
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const deleteComment = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM Comment WHERE id = ?', [req.params.id])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Comment not found'
        })
        
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};