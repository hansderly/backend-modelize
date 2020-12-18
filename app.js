require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const feed = require('./routes/feed');
const auth = require('./routes/auth');
const feeds = require('./routes/feeds');
const models = require('./routes/models');

const app = express();

// * Middleware
app.use(morgan('dev'));
app.use(express.json({limit: '60mb'}));
app.use(express.urlencoded({limit: '60mb'}));
app.use('/uploads',express.static('uploads'));

// * Routes
app.use('/api/auth', auth);
app.use('/api/feed', feed);
app.use('/api/feeds', feeds);
app.use('/api/models', models);

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
