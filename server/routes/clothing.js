const express = require('express');
const router = express.Router();
const Clothing = require('../db/models/Clothing');


router.get('/', (req, res, next) => {
    Clothing.findAll()
        .then(clothing => res.send(clothing))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Clothing.create(req.body)
        .then(clothing => res.send(clothing))
        .catch(next)
})


module.exports = router;