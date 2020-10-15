const User = require('../../dBmodels/user');
const Course = require('../../dBmodels/course');
const createError = require('http-errors')

module.exports = registerCourse = async (courseId, userId) => {
    try {
        const course = await Course.findById(courseId);

        if (!course) {
            throw createError.NotFound('Course not found');
        }

        const user = await User.findById(userId);

        if (!user) {
            throw createError.NotFound('User does not exist');
        }

        user.registeredCourses = [...user.registeredCourses, courseId];
        course.registeredUsers = [...course.registeredUsers, userId];

        await course.save();
        await user.save();

        return {
            ...user._doc,
            password: null
        }
    } catch (error) {
        throw error;
    }
}