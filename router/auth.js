const config = require('config');
//const jwt = require('jsonwebtoken');
const Joi = require('joi');
//const bcrypt = require('bcrypt'); 
const _ = require('lodash');
const { User} = require('../models/user');
const { User} = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
 

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.'); 
    
    //const token = jwt.sign({ _id: user._id}, config.get('jwtPrivateKey'));
    //res.send(token);//jsonwebtoken

}); 
    /*
    user = new User(_.pick(req.body, ['name', 'email', 'password']));//store in database
     //const salt = await bcrypt.genSalt(10);
    //user.password = await bcrypt.hash(user.password, salt);//bcrypt refuse to install
     await user.save()
    res.send(_.pick(user, ['_id', 'name', 'email']));
});
*/
function validate (req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    };
    return Joi.validate(req, schema);
}

module.exports = router;