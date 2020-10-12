const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chalk = require('chalk');
const createError = require('http-errors');
const isAuthenticated = require('./middleware/isAuthenticated')
require('dotenv').config();

// Importing helpers and utilities
const connectToDatabase = require('./utils/database');

const app = express();

// Connect to database
(async () => {
    try {
        await connectToDatabase();
    } catch (error) {
        console.log(chalk.redBright(`Error connecting to database! Error details: ${error}`))
    }
})();

// Initializing middleware
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(isAuthenticated);

// Importing routes
const adminRoutes = require('./routes/api/admin');
const userRoutes = require('./routes/api/user');
const courseRoutes = require('./routes/api/course')

// Registering routes
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/course', courseRoutes)




// Catch 404 and forward to error handler
app.use(async (request, response, next) => {
    next(createError.NotFound());
});

// Error handler
app.use((error, request, response, next) => {
    console.log(error)
    response.status(error.status || 500);
    response.send({
        error: {
            status: error.status || 500,
            message: error.message
        }
    })
});


module.exports = app;