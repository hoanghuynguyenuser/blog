// const express = require('express')
// const morgan = require('morgan')
import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars';
import * as path from 'path';
import {fileURLToPath} from 'url';

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('combined'))

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

app.get('/', (req, res) => {
  res.render('home'); //move home into {{{body}}}
});
app.get('/news', (req, res) => {
  res.render('news'); 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`++++++++++++++++++++++++++++++++++++++++++`)

})