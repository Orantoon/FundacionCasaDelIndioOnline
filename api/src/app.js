import express from 'express'
import usuarioRoutes from './routes/usuario.routes.js'
import fundacionRoutes from './routes/fundacion.routes.js'

const app = express();
const cors = require('cors');

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// rutas
app.use('/api', usuarioRoutes);
app.use('/api', fundacionRoutes);


app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;