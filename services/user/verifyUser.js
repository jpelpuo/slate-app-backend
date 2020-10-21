const User = require('../../dBmodels/user');
const createError = require('http-errors');

module.exports = verifyUser = async userId => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw createError.Unauthorized()
        }
        
        return user;
    } catch (error) {
        throw error;
    }
}