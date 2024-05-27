import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../views/src/imgs');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

export const newImage = (req, res) => {
    upload.single('image')(req, res, (err) => {
        if (err) {
            console.error('Error uploading file:', err);
            return res.status(400).json({ message: 'Error uploading file', error: err.message });
        }
        res.json({ filename: req.file.filename });
    });
};