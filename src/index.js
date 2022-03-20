// const express = require('express')
// const morgan = require('morgan')
import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars';
import * as path from 'path';
import {fileURLToPath} from 'url';

import {route} from './routes/index.js';

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'))

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`++++++++++++++++++++++++++++++++++++++++++`)

})