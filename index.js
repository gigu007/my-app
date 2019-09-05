const config = require('config');
const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const customers = require('./router/customer');
const genres = require('./router/genres');
const users = require('./router/user');
//const auth = require('./router/auth');
const app = express();
/*
if (!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}
*/
mongoose.connect('mongodb://localhost/Vidly')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customer', customers);
app.use('/api/user', users);
//app.use('/api/auth', auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));