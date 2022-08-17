import { Router } from 'express'
import { getTasks } from '../controllers/tasks.controller.js';

export const router = Router()

router.get('/', getTasks)

router.get('/addTask', (req, res) =>{
    res.render('addTaskForm')
})

router.get('/editTask', (req, res) =>{
    res.render('editTaskForm')
})