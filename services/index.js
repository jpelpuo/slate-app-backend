const adminLogin = require('./admin/login')
const userLogin = require('./user/login')
const register = require('./user/register')
const saveImage = require('./user/saveImage')
const addCourse = require('./course/addCourse')
const registerCourse = require('./user/registerCourse')
const getUserInfo = require('./user/getUserInfo')
const getCourses = require('./course/getCourses')
const deleteCourse = require('./course/deleteCourse')
const unregisterCourse = require('./user/unregisterCourse')
const addExam = require('./exam/addExam')
const getExams = require('./exam/getExams')

module.exports = {
    adminLogin,
    userLogin,
    register,
    saveImage,
    addCourse,
    registerCourse,
    getUserInfo,
    getCourses,
    deleteCourse,
    unregisterCourse,
    addExam,
    getExams
}