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

setTimeout(handleDisconnect, 50000)

const handleDisconnect = () => {
    let sql1 =
		'SELECT * FROM images ';
	db.query(sql1,(err, result) => {
		
	});
}
module.exports = router;
