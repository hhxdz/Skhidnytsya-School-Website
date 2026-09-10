import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import mainRouter from './routers/mainRouter.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', mainRouter)

app.listen(PORT, ()=>{
    console.log(`App started at http://localhost:${PORT}`);
    
})