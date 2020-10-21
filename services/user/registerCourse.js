const User = require('../../dBmodels/user');
const Course = require('../../dBmodels/course');
const createError = require('http-errors')
const verifyUser = require('./verifyUser');
const getCourse = require('../course/getCourse')

module.exports = registerCourse = async (courseId, userId) => {
    try {
        // Check availability of user and course
        const user = await verifyUser(userId)
        const course = await getCourse(courseId)

        // Update user and course
        user.registeredCourses = [...user.registeredCourses, courseId]
        course.registeredUsers = [...course.registeredUsers, userId]

        // Save changes
        await course.save();
        await user.save();

        return user.registeredCourses.includes(courseId) && course.registeredUsers.includes(userId)
    } catch (error) {
        throw error;
    }
}