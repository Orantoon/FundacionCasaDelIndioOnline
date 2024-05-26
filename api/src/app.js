import express from 'express'
import fundacionRoutes from './routes/fundacion.routes.js'
import usuarioRoutes from './routes/usuario.routes.js'
import postRoutes from './routes/post.routes.js'
import commentRoutes from './routes/comment.routes.js'
import communityRoutes from './routes/community.routes.js'
import slideRoutes from './routes/slide.routes.js'
import visitlogRoutes from './routes/visitlog.routes.js'
import donationcampaignRoutes from './routes/donationcampaign.routes.js'
import donationRoutes from './routes/donation.routes.js'

const app = express();
const cors = require('cors');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../views/src/imgs');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ filename: req.file.filename });
});

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// rutas
app.use('/api', fundacionRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', communityRoutes);
app.use('/api', slideRoutes);
app.use('/api', visitlogRoutes);
app.use('/api', donationcampaignRoutes);
app.use('/api', donationRoutes);


app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;