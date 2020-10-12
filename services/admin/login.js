const Admin = require('../../dBmodels/admin');
const bcrypt = require('bcryptjs');
const { createAccessToken, createRefreshToken } = require('../../helpers/jwtHelper');
const createError = require('http-errors');

module.exports = login = async ({ email, password }) => {
    try {

        const admin = await Admin.findOne({ email });

        if (!admin) {
            throw createError.NotFound("Invalid admin credentials");
        }

        const isEqual = await bcrypt.compare(password, admin.password);

        if (!isEqual) {
            throw createError.Unauthorized("Invalid admin credentials")
        }

        const accessToken = await createAccessToken(admin.id, admin.email);
        const refreshToken = await createRefreshToken(admin.id, admin.email);

        return {
            accessToken,
            refreshToken,
        }

    } catch (error) {
        throw error;
    }
}