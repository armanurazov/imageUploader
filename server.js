PORT = 8000;
const express = require('express');
const {engine} = require('express-handlebars');
const mongoose = require('mongoose')
const indexRoute = require('./routes/index')
const uploadRoute = require('./routes/upload');
const app = express();

// handling public files 

app.use(express.static('./public'))

// mongo db connection

mongoose.connect('mongodb+srv://alifromim:Mariam7-una@cluster0.9h7xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(console.log('connected to MongoDB'))
    .catch(console.error());


// express-hadlebars engine and views configuration

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// routes configuration

app.use('/', indexRoute);

app.use('/upload', uploadRoute);




app.listen(PORT, console.log('Connected to ' + PORT));