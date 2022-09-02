import 'dotenv/config'
import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import hbs from 'hbs'
import { router } from './src/routes/tasks.routes.js'
import morgan from 'morgan'
import methodOverride from 'method-override'
import './src/db/connection.js'


//Initializations
export const app = express()

//settings
app.set('port', process.env.PORT || 4000)

// define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

//middlewares
//static folder
app.use(express.static(path.join(__dirname, '/public')))
//for process data sent from forms
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.use(express.json());

//views config.
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'))
hbs.registerPartials(path.join(__dirname, 'src/views/partials'))

app.use(router)

app.listen(app.get('port'), () => {
    console.log('Server up running on port', app.get('port'))
})  