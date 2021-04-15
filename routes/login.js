const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('index', { title: "Trip Planner", form_action: "login" });
});

router.post('/', async (req, res) => {
    //TODO
    //log in to database
});

module.exports = router;