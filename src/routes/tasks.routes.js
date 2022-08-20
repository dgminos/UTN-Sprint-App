import { Router } from 'express'
import { getTasks,addTasks} from '../controllers/tasks.controller.js';

export const router = Router()

router.get('/', getTasks)

router.get('/addTask',(req, res) =>{
    res.render('addTask')})
router.post('/addTask', addTasks)

router.get('/editTask/:id', (req, res) =>{
    res.render('editTask')
})