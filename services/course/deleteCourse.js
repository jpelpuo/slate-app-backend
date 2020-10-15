const Course = require('../../dBmodels/course');
const createError = require('http-errors');
const Admin = require('../../dBmodels/admin');

module.exports = deleteCourse = async (courseId, userId) => {
    try {
        const admin = await Admin.findById(userId);

        if (!admin) {
            throw createError.Unauthorized()
        }

        const operationInfo = await Course.findByIdAndDelete(courseId);

        return operationInfo;
    } catch (error) {
        throw error
    }
}