const express = require('express');
const router = express.Router();

const db = require('../database/db')

router.get('/:modelId', (req, res) => {

    const modelId = req.params.modelId;

    let sql = 'SELECT * FROM images WHERE images.id_model = ? ORDER BY date DESC'
    db.query(sql, modelId, (err, result) => {
        console.log(result)
        res.status(201).json(result)
    })

});
// router.post('/', (req, res) => {});
router.put('/', (req, res) => {});
router.patch('/', (req, res) => {});

module.exports = router;
