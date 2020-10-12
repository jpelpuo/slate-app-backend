const User = require('../../dBmodels/user');
const bcrypt = require('bcryptjs');
const { createAccessToken, createRefreshToken } = require('../../helpers/jwtHelper');
const createError = require('http-errors');

module.exports = login = async ({ email, password }) => {
    try {

        const user = await User.findOne({ email });

        if (!user) {
            throw createError.NotFound("User not found");
        }

        const isEqual = await bcrypt.compare(password, user.password);

        if (!isEqual) {
            throw createError.Unauthorized("Invalid user credentials!!")
        }

        const accessToken = await createAccessToken(user.id, user.email);
        const refreshToken = await createRefreshToken(user.id, user.email);

        return {
            accessToken,
            refreshToken
        }

    } catch (error) {
        throw error;
    }
}