const adminLogin = require('./admin/login');
const userLogin = require('./user/login');
const register = require('./user/register');
const saveImage = require('./user/saveImage');
const addCourse = require('./course/addCourse');
const registerCourse = require('./user/registerCourse');
const getUserInfo = require('./user/getUserInfo')

module.exports = {
    adminLogin,
    userLogin,
    register,
    saveImage,
    addCourse,
    registerCourse,
    getUserInfo
}