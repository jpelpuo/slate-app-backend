const User = require('../../dBmodels/user');
const Course = require('../../dBmodels/course');
const createError = require('http-errors')

module.exports = registerCourse = async (courseId, userId) => {
    try {
        const courseExists = await Course.findById(courseId);

        if (!courseExists) {
            throw createError.NotFound('Course not found');
        }

        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound('User does not exist');
        }

        user.registeredCourses = [...user.registeredCourses, courseId];
        await user.save();

        return {
            ...user._doc,
            password: null
        }
    } catch (error) {
        throw error;
    }
}