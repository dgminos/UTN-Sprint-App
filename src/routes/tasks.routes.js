import { Router } from 'express'
import { getTasks,createTask,editorTask, updateTask, deleteTask } from '../controllers/tasks.controller.js';

export const router = Router()

router.get('/', getTasks)

router.get('/addTask',(req, res) =>{
    res.render('addTask')})
router.post('/addTask', createTask, editorTask)

router.get('/editTask/:id', editorTask) 

router.post('/editTask/:id', updateTask)

router.get('/deleteTask/:id', deleteTask)  