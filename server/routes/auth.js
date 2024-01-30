const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'sahilisagoodboy'
const fetchuser = require('../middleware/fetchuser')


// 😐😐❤️😃🥲🤣😎😄😀
//ROUTE 1: create a user using POST "/api/auth/createuser". no login require
router.post('/createuser', [
    body('name', 'enter a valid name').isLength({ min: 4 }),
    body('email', 'enter valid email').isEmail(),
    body('password', 'enter a valid password').isLength({ min: 8 }),
], async (req, res) => {
    // if there are errors return bad request and the errors 
    let success=false
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    // check weather the user with this email exists already
    try {
        // using try and catch for error handleing

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success, error: 'sorry a user with this email already exists' })
        }

        // password hashing
        const salt = await bcrypt.genSalt(10);
        securePass = await bcrypt.hash(req.body.password, salt);

        // creating a new user 
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePass,
        })  //

        //jwt authentication
        const data = {
            id: user.id,
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        // res.json(user)
        res.json({ authtoken }) //
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }

})



// 😃😃🥰🥰🥰😂😂❤️❤️😐✂️
//ROUTE 2: authenticate a user using POST "/api/auth/login". no login require
router.post('/login', [
    body('email', 'enter valid email').isEmail(),
    body('password', 'password cannot be blank').exists(),
], async (req, res) => {
    success=false
    // if there are errors return bad request and the errors 
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }


    //    compare email and password with your existing account
    const { email, password } = req.body;
    try {
        // firstly find email with findone method 
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({success, error: "please try to login with correct email" })
        }
        // compare password with you existing accounting
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({success, error: "please try to login with correct email" })
        }

        // sending authtoken 
        const data = {
            id: user.id,
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true
        res.json({success, authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }

})


// 😄😎😀🤣😡🤬🫡😎🫥
// ROUTE 3: getting loggedIn user details using POST:"/api/auth/getuser" login require
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        let userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})
module.exports = router