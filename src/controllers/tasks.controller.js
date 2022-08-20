import { db } from "../db/database.js"

export const getTasks = async (req, res) => {
    try {
        let sql = "SELECT taskId, taskTitle, taskDescription, DATE_FORMAT( taskDate, '%d/%m/%Y - %H:%I:%S') as taskDate, taskCreatedBy, taskLabel FROM tasks";

    let query=db.query(sql,(err, results) => {
        if(err) throw err;
        res.render('home', {results})
    }); 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createTask = async (req,res)=>{
    try {
                let sql="INSERT INTO tasks SET taskTitle='" + req.body.Title +"',taskDescription='" + req.body.Description +"', taskDate = now(), taskCreatedBy = '" + req.body.CreatedBy+"',taskLabel = '" + req.body.Label + "'";
                let query=db.query(sql, (err, results)=>{
                    if(err) throw err;
                    res.redirect('/')
            });
        }catch (error) {
            return res.status(500).json({message: error.message})
        }
        }