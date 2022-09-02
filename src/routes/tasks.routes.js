import { Router } from 'express'
import { getTasks, createTask, getTaskById, updateTask, deleteTask } from '../controllers/tasks.controller.js';

export const router = Router()

router.get('/', getTasks)

router.get('/addTask',(req, res) =>{
    res.render('addTask')})

router.post('/addTask', createTask)

router.get('/editTask/:id', getTaskById) 

router.put('/editTask/:id', updateTask)

router.delete('/deleteTask/:id', deleteTask)  