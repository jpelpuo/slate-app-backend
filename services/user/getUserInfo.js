const User = require('../../dBmodels/user');
const createError = require('http-errors')

module.exports = getUserInfo = async email => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw createError.NotFound('User not found')
        }

        await user.populate('registeredCourses').execPopulate();

        return {
            ...user._doc,
            password: null
        }
    } catch (error) {
        throw error
    }
}