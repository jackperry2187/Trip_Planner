const express = require('express');
const router = express.Router();
const userData = require('../data/users');

router.get('/', async (req, res) => {
    res.render('index', { title: "Trip Planner", form_action: "login", index: true });
});

router.post('/', async (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.password;

        if(!username || !password) throw "Please enter all inputs";

        const user = await userData.login(req.body.username, req.body.password);
        if(user) {
            req.session.user = { username: username, _id: user._id.toString() };
            let theTrips = user.trips;
            if(theTrips) req.session.user.trips = theTrips;
            res.redirect('trips');
            return;
        }
        else throw "No account found with that username and password.";
        
    }
    catch(error) {
        res.render('index', { title: "Trip Planner", form_action: "login", error: error, index: true});
    }
});

module.exports = router;