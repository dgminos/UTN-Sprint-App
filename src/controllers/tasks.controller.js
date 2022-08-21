import { connection } from "../db/connection.js"

export const getTasks = (req, res) => {
        let sql = "SELECT taskId, taskTitle, taskDescription, DATE_FORMAT( taskDate, '%d/%m/%Y') as taskDate, taskCreatedBy, taskLabel FROM tasks";
        connection.query(sql,(error, results) => {
        error? res.json(error.message) : 
        res.render('home', {results})
    })  
}

export const createTask = (req,res)=>{
        let sql="INSERT INTO tasks SET taskTitle='" + req.body.Title +"',taskDescription='" + req.body.Description +"', taskDate = now(), taskCreatedBy = '" + req.body.CreatedBy+"',taskLabel = '" + req.body.Label + "'";
        connection.query(sql, (error, results)=>{
        error? res.json(error.message) :
        res.redirect('/')
            })
}

export const getTaskById = (req, res) => {
        const id  = req.params.id
        connection.query('SELECT * FROM tasks WHERE taskId=?', [id], (error, results) => {
        error? res.json(error.message) :
        res.render('editTask', { results })
    })
}

export const updateTask = (req, res) => {
        const id  = req.params.id
        const data = req.body
        connection.query('UPDATE tasks SET ? WHERE taskId=?', [data, id], (error) => {
        error? res.json(error.message) : 
        res.redirect('/')
    })
}

export const deleteTask = (req, res) => {
        const id = req.body.id
        connection.query('DELETE FROM tasks WHERE taskId =?', [id],(error) => {
        error? res.json(error.message) : 
        res.redirect('/')
    })

}