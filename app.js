import express from 'express';
import bodyParser from 'body-parser';
import modules from './src/modules';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

modules(app);

app.use('*', (req, res) => res.status(404).json({
    message: 'Not found. Use /api/v1 to access the api'
}));

export default app;