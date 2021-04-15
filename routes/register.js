const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('index', { title: "Register", form_action: "register", registering: true });
});

router.post('/', async (req, res) => {
    //TODO
    //register to database
});

module.exports = router;