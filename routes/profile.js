const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('profile', { title: "Profile" });
});

router.get('/feedback', async (req, res) => {
    res.render('feedback', { title: "Feedback" });
});

router.post('/', async (req, res) => {
    //TODO change username/password
});

router.post('/feedback', async (req, res) => {
    //TODO send feedback... somewhere?
});

module.exports = router;