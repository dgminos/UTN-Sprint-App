import 'dotenv/config'
import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url';
import hbs from 'hbs'

export const app = express()

const PORT = process.env.PORT || 3034

// define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middlewares
//static folder
app.use(express.static(path.join(__dirname + '/public')));
//for process data sent from forms
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//views config.
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.listen(PORT, () => {
    console.log(`Server up running on port ${PORT}`)
})