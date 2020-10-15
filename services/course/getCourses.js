const Course = require('../../dBmodels/course');
const createError = require('http-errors');
const Admin = require('../../dBmodels/admin');

module.exports = getCourses = async (userId) => {
    try {
        const admin = await Admin.findById(userId);

        if (!admin) {
            throw createError.Unauthorized()
        }

        const courses = await Course.find()

        return courses;
    } catch (error) {
        throw error
    }
}