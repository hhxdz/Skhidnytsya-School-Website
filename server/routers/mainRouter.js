import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const mainRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

mainRouter.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../public', 'main.html'))
})





export default mainRouter;