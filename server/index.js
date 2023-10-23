const express = require('express');
const config = require('./config');
const router = require('./api');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

server.use(cors());
server.use(express.json());

server.use(express.urlencoded({ extended: true}));
server.use('/api', router);

mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then (() => {
        console.log('Connected to MongoDB datase');
});

server.listen(config.PORT, () => { 
    console.log('Server started on Port ' + config.PORT); 
});