PORT = 8000;
const express = require('express');
const {engine} = require('express-handlebars');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index');
const uploadRoute = require('./routes/upload');
const app = express();


// handling public files 

app.use(express.static(__dirname + '/public'));

// mongo db connection

// mongoose.connect('mongodb+srv://alifromim:Mariam7-una@cluster0.9h7xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
//     .then(console.log('connected to MongoDB'))
//     .catch(console.error());

// express-hadlebars engine and views configuration

app.engine('.hbs', engine({
    extname: '.hbs',
    partialsDir: __dirname + '/views/partials/'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// body-parser configurations

app.use(bodyParser.urlencoded({limit: '10mb', extended: false}));

// routes configuration

app.use('/', indexRoute);

app.use('/upload', uploadRoute);


app.listen(process.env.PORT || PORT, console.log('Connected to ' + PORT));