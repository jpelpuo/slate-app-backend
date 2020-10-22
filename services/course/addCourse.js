const Course = require('../../dBmodels/course');
const verifyAdmin = require('../../dBmodels/admin')

module.exports = addCourse = async ({ courseName, subject, description }, userId) => {
    try {
        verifyAdmin(userId)

        const newCourse = new Course({
            courseName,
            subject,
            description
        });

        await newCourse.save();

        return newCourse;

    } catch (error) {
        throw error;
    }
}
