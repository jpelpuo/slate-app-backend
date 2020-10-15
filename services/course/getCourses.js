const Course = require('../../dBmodels/course');
const createError = require('http-errors');
const Admin = require('../../dBmodels/admin');
const User = require('../../dBmodels/user')

module.exports = getCourses = async (userId) => {
    try {
        const admin = await Admin.findById(userId);

        const user = await User.findById(userId);

        if (!admin && !user) {
            throw createError.Unauthorized()
        }

        const courses = await Course.find()

        return courses;
    } catch (error) {
        throw error
    }
}