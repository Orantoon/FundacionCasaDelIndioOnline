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
    const creationDateTime = currentDate.toISOString().slice(0, 10)

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
        const [result] = await pool.query('DELETE FROM Donationcampaign WHERE id = ?', [req.params.id])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Donationcampaign not found'
        })
        
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
};