const express = require('express');
const router2 = new express.Router;

router2.get('/', (req, res) => {
    res.status(200).send("Welcome")
})

module.exports = router2                      // karan mala hi file durya file madhe use krta yav mhnun
