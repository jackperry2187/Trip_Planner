const express = require('express');
const router = express.Router();
const userData = require('../data/users');

router.get('/', async (req, res) => {
    res.render('index', { title: "Register", form_action: "register", registering: true, index: true });
});

router.post('/', async (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let confirm_password = req.body.confirm_password;

        if(!username || !password || !confirm_password) throw "Please enter all inputs";
        if(password != confirm_password) throw "Password and Confirm Password must be the same";

        const userCheck = await userData.readUsername(username);
        console.log(userCheck);
        if(userCheck) throw "User with that username already exists";

        const user = await userData.create(req.body.username, req.body.password);
        if(user) {
            req.session.user = { username: username, _id: user._id.toString() };
            let theTrips = user.trips;
            if(theTrips) req.session.user.trips = theTrips;
            res.redirect('trips');
            return;
        }
        else throw "Register error";
        
    }
    catch(error) {
        res.render('index', { title: "Register", form_action: "register", registering: true, index: true, error: error });
    }
});

module.exports = router;