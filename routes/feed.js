const express = require('express');
const router = express.Router();
const moment = require('moment');
require('moment/locale/fr');

const upload = require('../utils/multer');
const db = require('../database/db');

router.post('/', upload.single('image'), (req, res) => {
	// console.log(req.body)
	const modelID = req.body.modelID;
	const filename = req.file.filename;
	const baseURL = process.env.BASE_URL + 'uploads/';
	const imagePath = baseURL + filename;
	// const modelID = 2;
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


router.delete('/:filename', (req, res) => {
	const filename = req.params.filename;
	console.log(filename)
});


const timingSQL = () => {
	let sql =
		'SELECT * FROM images';
	db.query(sql, (err, result) => {
		console.log('test');
	});
}

setTimeout(timingSQL, 10000)

module.exports = router;
