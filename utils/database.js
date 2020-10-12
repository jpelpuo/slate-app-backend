const mongoose = require('mongoose');
const chalk = require('chalk');


module.exports = connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(chalk.greenBright("Connected to database!"))
    } catch (error) {
        throw error;
    }
}