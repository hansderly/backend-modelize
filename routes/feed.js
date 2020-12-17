const express = require('express');
const router = express.Router();
const moment = require('moment');
require('moment/locale/fr');
const { cloudinary } = require('../utils/cloudinary');

const upload = require('../utils/multer');
const db = require('../database/db');

router.post('/', async (req, res) => {
	const { modelID, imgBase64, imageUri } = req.body;
	console.log(modelID);
	// const baseURL = process.env.BASE_URL + 'uploads/';

	try {
		let filename, imagePath;
		const uploadRes = await cloudinary.uploader.upload(
			'data:image/png;base64,' + imgBase64,
			{
				upload_preset: 'modelize',
			}
		);
		filename = uploadRes.public_id;
		imagePath = uploadRes.secure_url;
		// console.log(filename, imagePath);
		// * Add to database
		const date = moment().format();
		// console.log(date)
		let sql =
			'INSERT INTO images (id_model, filename, image_path, date) VALUES (?, ?, ?, ?)';
		db.query(sql, [modelID, filename, imagePath, date], (err, result) => {
			// console.log(result);
		});
		res.status(201).json({ message: 'Image upload successfully' });
	} catch (error) {
		console.log(error);
	}
});

router.delete('/modelize/:filename', (req, res) => {
	const filename = 'modelize/' + req.params.filename;
	console.log('tes');

	let sql2 = 'DELETE FROM images WHERE filename = ? ';
	db.query(sql2, filename, (err, result) => {
		console.log(result);
	});
});

module.exports = router;
