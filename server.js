const express = require('express');
const app = express();
const http = require('http').Server(app);

//Config
const port = process.env.PORT || 6000;

//MiddleWare
const cors = require('cors'); // Cross Domain Request
const morgan = require('morgan'); // Login request to the node console

//Initialize Middleware
app.use(morgan('dev')); // Better login of the request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route Set Up
app.use('/api/fakesites', require('./api/routes/fakeNewsSites'));

app.use('*', (request, response) =>
  response
    .status(404)
    .json({ message: 'Mate the resource your are looking for is nowhere to be found! Please make sure you know what you are doing!' })
);

http.listen(port, (error) => (error ? console.error('Server Stopped') : console.log('Port:', port)));
