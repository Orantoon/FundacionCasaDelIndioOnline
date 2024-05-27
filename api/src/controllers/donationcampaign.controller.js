import {pool} from '../db.js'

export const getDonationcampaigns = async (req, res) => {
    try {
        //throw new Error("ERROR de prueba")
        const [rows] = await pool.query('SELECT * FROM Donationcampaign')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const postDonationcampaign = async (req, res) => {
    const {community, name, text} = req.body
    const currentDate = new Date();
    const offset = currentDate.getTimezoneOffset() * 60000;
    const localDate = new Date(currentDate.getTime() - offset);
    const creationDateTime = localDate.toISOString().slice(0, 19).replace('T', ' ');

    try {
        const [rows] = await pool.query('INSERT INTO Donationcampaign (community, name, text, creationDateTime) VALUES (?, ?, ?, ?)', [community, name, text, creationDateTime])
        res.send({
            id: rows.insertId,
            community,
            name,
            text,
            creationDateTime
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};

export const updateDonationcampaign = async (req, res) => {
    const { id } = req.params;
    const {community, name, text} = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE Donationcampaign SET community = IFNULL(?, community), name = IFNULL(?, name), text = IFNULL(?, text) WHERE id = ?',
            [community, name, text, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Donationcampaign not found"
            });
        }

        const [rows] = await pool.query('SELECT * FROM Donationcampaign WHERE id = ?', [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        });
    }
};

export const deleteDonationcampaign = async (req, res) => {
    try {
        await pool.query('START TRANSACTION');

        await pool.query('DELETE FROM Donation WHERE campaign = ?', [req.params.id]);

        const [result] = await pool.query('DELETE FROM Donationcampaign WHERE id = ?', [req.params.id])
    
        if (result.affectedRows <= 0) {
            await pool.query('ROLLBACK');
            return res.status(404).json({
                message: 'Donationcampaign not found'
            });
        }

        await pool.query('COMMIT');
        
        res.sendStatus(204)
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error('Error deleting Donationcampaign:', error);
        return res.status(500).json({
            message: 'Something went wrong',
            error: error.message
        });
    }
};