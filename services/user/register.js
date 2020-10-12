const User = require('../../dBmodels/user');
const bcrypt = require('bcryptjs');
const createError = require('http-errors');

const SALT_ROUNDS = 12;

module.exports = register = async ({ firstName, lastName, gender, college, mobile, email, password }) => {
    try {
        const user = await User.findOne({ email });

        if (user) {
            throw createError.Conflict("User already exists");
        }

        const salt = await bcrypt.genSalt(SALT_ROUNDS);

        const hash = await bcrypt.hash(password, salt);

        password = hash;

        const newUser = new User({
            firstName,
            lastName,
            gender,
            college,
            mobile,
            email,
            password
        });

        await newUser.save();

        return newUser;

    } catch (error) {
        throw error;
    }
}