const Course = require('../../dBmodels/course');
const createError = require('http-errors');
const Admin = require('../../dBmodels/admin')

module.exports = addCourse = async ({ courseName, subject, description }, userId) => {
    try {
        const admin = await Admin.findById(userId);

        if (!admin) {
            throw createError.Unauthorized()
        }

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
