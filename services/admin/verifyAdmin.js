const Admin = require('../../dBmodels/admin');
const createError = require('http-errors');

module.exports = verifyAdmin = async userId => {
    try {
        const admin = await Admin.findById(userId);

        if (!user) {
            throw createError.Unauthorized()
        }

        return admin;
    } catch (error) {
        throw error;
    }
}