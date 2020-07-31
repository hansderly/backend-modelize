require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const app = express();

// ! Middleware
app.use(morgan('dev'))
app.use(express.json())

// * Routes



// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))

