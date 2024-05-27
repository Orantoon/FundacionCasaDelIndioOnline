import {pool} from '../db.js'

export const getUsuarios = async (req, res) => {
    try {
        //throw new Error("ERROR de prueba")
        const [rows] = await pool.query('SELECT * FROM User')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const getUsuario = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM User WHERE id = ?', [req.params.id]);
    
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

export const postUsuario = async (req, res) => {
    const {name, email, password, isAdmin, newsletter, fundation} = req.body
    const currentDate = new Date();
    const offset = currentDate.getTimezoneOffset() * 60000;
    const localDate = new Date(currentDate.getTime() - offset);
    const creationDateTime = localDate.toISOString().slice(0, 19).replace('T', ' ');

    try {
        const [rows] = await pool.query('INSERT INTO User (name, email, password, isAdmin, newsletter, creationDateTime, fundation) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, email, password, isAdmin, newsletter, creationDateTime, fundation])
        res.send({
            id: rows.insertId,
            name,
            email,
            password,
            isAdmin,
            newsletter,
            creationDateTime,
            fundation
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const {name, email, password, isAdmin, newsletter} = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE User SET name = IFNULL(?, name), email = IFNULL(?, email), password = IFNULL(?, password), isAdmin = IFNULL(?, isAdmin), newsletter = IFNULL(?, newsletter) WHERE id = ?',
            [name, email, password, isAdmin, newsletter, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const [rows] = await pool.query('SELECT * FROM User WHERE id = ?', [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        });
    }
};

export const deleteUsuario = async (req, res) => {
    try {
        await pool.query('START TRANSACTION');

        await pool.query('DELETE FROM Visitlog WHERE user = ?', [req.params.id]);

        await pool.query('DELETE FROM Comment WHERE user = ?', [req.params.id]);

        await pool.query('DELETE FROM Comment WHERE post IN (SELECT id FROM Post WHERE user = ?)', [req.params.id]);

        await pool.query('DELETE FROM Post WHERE user = ?', [req.params.id]);

        await pool.query('DELETE FROM Donation WHERE user = ?', [req.params.id]);

        await pool.query('DELETE FROM Donation WHERE approvedBy = ?', [req.params.id]);

        const [result] = await pool.query('DELETE FROM User WHERE id = ?', [req.params.id])
    
        if (result.affectedRows <= 0) {
            await pool.query('ROLLBACK');
            return res.status(404).json({
                message: 'User not found'
            });
        }

        await pool.query('COMMIT');
        
        res.sendStatus(204)
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error('Error deleting User:', error);
        return res.status(500).json({
            message: 'Something went wrong',
            error: error.message
        });
    }
};