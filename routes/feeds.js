const express = require('express');
const router = express.Router();
const db = require('../database/db');
const { cloudinary } = require('../utils/cloudinary');

router.get('/', async (req, res) => {
	let sql = 'SELECT * FROM images, models WHERE images.id_model = models.id ORDER BY date DESC';
	db.query(sql, (err, result) => {
		const data = JSON.parse(JSON.stringify([...result]));
		// console.log(data);
		console.log(data);
		res.status(201).json(result);
	});

	const { resources } = await cloudinary.search
		.expression('folder:modelize')
		.sort_by('uploaded_at', 'desc')
		.max_results(30)
		.execute();

	const publicID = resources.map(file => file.public_id)
	console.log(publicID);
	res.status(201).json();
});
router.post('/', (req, res) => {});
router.delete('/', (req, res) => {});

module.exports = router;
