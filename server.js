const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//access to the routing files
const items = require('./routes/api/items')

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to DataBase
mongoose.connect(db, {useNewUrlParser: true})
        .then (() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));
//use Routes
app.use('/api/items' , items);        
//Run the application to the server
const port = process.env.PORT || 5000;
app.listen(port, () =>console.log(`server is running on ${port}`));
