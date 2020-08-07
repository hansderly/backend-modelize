const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/', (req, res) => {
	let sql = 'SELECT * FROM images, models WHERE images.id_model = models.id ORDER BY date DESC';
	db.query(sql, (err, result) => {
		const data = JSON.parse(JSON.stringify([...result]));
		// console.log(data);
		res.status(201).json(result);
	});
});
router.post('/', (req, res) => {});
router.delete('/', (req, res) => {});

module.exports = router;
