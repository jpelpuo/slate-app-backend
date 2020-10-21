const Course = require('../../dBmodels/course');
const createError = require('http-errors');

module.exports = getCourse = async courseId => {
    try {
        const course = await Course.findById(courseId);

        if (!course) {
            throw createError.BadRequest("Course not found")
        }

        return course;
    } catch (error) {
        throw error;
    }
}