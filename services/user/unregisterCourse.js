const Course = require('../../dBmodels/course')
const removeFromList = require('../../helpers/removeFromList')
const verifyUser = require('./verifyUser')
const getCourse = require('../course/getCourse')

module.exports = unregisterCourse = async (courseId, userId) => {
    try {
        const user = await verifyUser(userId)
        const course = await getCourse(courseId)

        // Remove course from user
        const registeredCourses = removeFromList(user.registeredCourses, courseId)
        user.registeredCourses = [...registeredCourses]

        // Remove from course as well
        const registeredUsers = removeFromList(course.registeredUsers, userId)
        course.registeredUsers = [...registeredUsers]

        // Save changes
        await user.save()
        await course.save()

        return !user.registeredCourses.includes(courseId) && !course.registeredUsers.includes(userId)

    } catch (error) {
        throw error;
    }
}