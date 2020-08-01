require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const addfedd = require('./routes/addfeed');
const auth = require('./routes/auth');
const feeds = require('./routes/feeds');
const models = require('./routes/models');

const app = express();

// * Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('uploads'));

// * Routes
app.use('/api/auth', auth);
app.use('/api/feeds', feeds);
app.use('/api/models', models);

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
