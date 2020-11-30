const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcrypt');
const saltRound = 10;
const jwt = require('jsonwebtoken');

const validateBody = require('../middleware/validation');
const db = require('../database/db');

const signupSchema = Joi.object({
	username: Joi.string().min(3).required(),
	phone: Joi.string().min(11).required(),
	password: Joi.string().min(5).required(),
});

// ! RESGISTER
router.post('/signup', validateBody(signupSchema), (req, res) => {
	const { username, phone, password } = req.body;
	console.log(username, phone, password);
	const baseURL = process.env.BASE_URL;
	const avatarPath = baseURL + 'uploads/avatar/' + 'test.jpg';

	let sql1 = 'SELECT * FROM models WHERE phone = ?';
	db.query(sql1, phone, (err, result) => {
		if (result.length)
			return res.status(409).json({ error: 'User already exist' });

		// ! hash password
		const hashPassword = bcrypt.hashSync(password, saltRound);
		let sql =
			'INSERT INTO models (username, phone, password, avatar_path) VALUES (?, ?, ?, ?)';
		db.query(
			sql,
			[username, phone, hashPassword, avatarPath],
			(err, result) => {
				console.log(result);
				res.status(201).json({ message: 'User added succesfully' });
			}
		);
	});
});

const signinSchema = Joi.object({
	phone: Joi.string().min(11).required(),
	password: Joi.string().min(5).required(),
});

// ! LOGIN
router.post('/signin', validateBody(signinSchema), (req, res) => {
	const { phone, password } = req.body;

	let sql = 'SELECT * FROM models WHERE phone = ?';
	db.query(sql, phone, (err, result) => {
		if (result.length) {
			const {
				id: userId,
				username,
				password: hashPassword,
				first_name,
				last_name,
				phone,
				color,
				hair,
				height,
				avatar_path,
			} = result[0];

			const isMatch = bcrypt.compareSync(password, hashPassword);

			if (!isMatch)
				return res
					.status(404)
					.json({ message: 'Invalid email and/or password' });

			isMatch &&
				(token = jwt.sign(
					{
						userId,
						username,
						first_name,
						last_name,
						phone,
						color,
						hair,
						height,
						avatar_path,
					},
					process.env.JWT_SECRET_KEY
				));

			// console.log(token);
			res.status(201).send(token);
		}
	});
});

module.exports = router;
