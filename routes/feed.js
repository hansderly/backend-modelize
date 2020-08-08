const express = require('express');
const router = express.Router();
const moment = require('moment');

const upload = require('../utils/multer');
const db = require('../database/db');

router.post('/', upload.single('image'), (req, res) => {
	const filename = req.file.filename;
	const baseURL = process.env.ASSETS_BASE_URL;
	const imagePath = baseURL + filename;
	// const modelID = req.body.modelID;
	const modelID = 2;
	console.log(imagePath, baseURL, req.file, filename);

	// * Add to database
	const date = moment().format();
	// console.log(date)
	let sql =
		'INSERT INTO images (id_model, filename, image_path, date) VALUES (?, ?, ?, ?)';
	db.query(sql, [modelID, filename, imagePath, date], (err, result) => {
		// console.log(result);
	});
	res.status(201).json({ message: 'Image upload successfully' });
});

module.exports = router;
