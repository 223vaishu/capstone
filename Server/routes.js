const express = require('express');
const router = express.Router();
const { Mitsport } = require('./models/sport.js');

router.get('/sport', async (req, res) => {
    try {
        const sports = await Mitsport.find({});
        res.status(200).json({ sports }); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
