import {pool} from '../db.js'

export const getPosts = async (req, res) => {
    try {
        //throw new Error("ERROR de prueba")
        const [rows] = await pool.query('SELECT * FROM Post')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const getPost = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Post WHERE id = ?', [req.params.id]);
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Post not found'      
        })
        
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const postPost = async (req, res) => {
    const {user, name, text, image} = req.body
    const currentDate = new Date();
    const offset = currentDate.getTimezoneOffset() * 60000;
    const localDate = new Date(currentDate.getTime() - offset);
    const creationDateTime = localDate.toISOString().slice(0, 19).replace('T', ' ');

    try {
        const [rows] = await pool.query('INSERT INTO Post (user, name, text, image, creationDateTime) VALUES (?, ?, ?, ?, ?)', [user, name, text, image, creationDateTime])
        res.send({
            id: rows.insertId,
            user,
            name,
            text,
            image,
            creationDateTime
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const {user, name, text, image} = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE Post SET user = IFNULL(?, user), name = IFNULL(?, name), text = IFNULL(?, text), image = IFNULL(?, image) WHERE id = ?',
            [user, name, text, image, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        const [rows] = await pool.query('SELECT * FROM Post WHERE id = ?', [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        });
    }
};

export const deletePost = async (req, res) => {
    try {
        await pool.query('START TRANSACTION');

        await pool.query('DELETE FROM Comment WHERE post = ?', [req.params.id]);

        const [result] = await pool.query('DELETE FROM Post WHERE id = ?', [req.params.id])
    
        if (result.affectedRows <= 0) {
            await pool.query('ROLLBACK');
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        await pool.query('COMMIT');
        
        res.sendStatus(204)
    } catch (error) {
        await pool.query('ROLLBACK');
        return res.status(500).json({
            message: 'Something went wrong'
        });
    }
};