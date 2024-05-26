import {pool} from '../db.js'

export const getSlides = async (req, res) => {
    try {
        //throw new Error("ERROR de prueba")
        const [rows] = await pool.query('SELECT * FROM Slide')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const postSlide = async (req, res) => {
    const {community, image} = req.body

    try {
        const [rows] = await pool.query('INSERT INTO Slide (community, image) VALUES (?, ?)', [community, image])
        res.send({
            id: rows.insertId,
            community,
            image
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const deleteSlide = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM Slide WHERE id = ?', [req.params.id])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Slide not found'
        })
        
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};