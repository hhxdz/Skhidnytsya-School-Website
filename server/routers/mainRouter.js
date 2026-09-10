import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const mainRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

mainRouter.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../pages', 'main.html'))
})

mainRouter.get('/teachers', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../pages', 'teachers.html'))
})

mainRouter.get('/administration', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../pages', 'administration.html'))
})

mainRouter.get('/classes', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../pages', 'classes.html'))
})




export default mainRouter;