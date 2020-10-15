const express = require('express');
const { registerCourse, addCourse, getCourses, deleteCourse } = require('../../services/')
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
const { checkAuthorization } = require('../../helpers/authHelper');

const router = express.Router();

const SUCCESS = 'success';
const FAILURE = 'failure';

// @router GET /api/course/register
// @description Register for a course
router.get('/register/:courseId', async (request, response, next) => {
    try {
        checkAuthorization(request);

        const { courseId } = request.params;

        const courseAdded = await registerCourse(courseId, request.userId);

        if (!courseAdded) {
            return response.json({
                status: FAILURE
            })
        }

        return response.json({
            status: SUCCESS
        })
    } catch (error) {
        next(error)
    }
})

// @router POST /api/course/add
// @description Add a course
router.post('/add', [

], async (request, response, next) => {
    try {
        checkAuthorization(request);

        const newCourse = await addCourse(request.body, request.userId);

        return response.json({
            newCourse
        })

    } catch (error) {
        next(error)
    }
})


router.get('/', async (request, response, next) => {
    try {
        checkAuthorization(request)

        const courses = await getCourses(request.userId)

        return response.json({
            courses
        })
    } catch (error) {
        next(error)
    }
})

router.get('/delete/:courseId', async (request, response, next) => {
    try {
        checkAuthorization(request);

        const { courseId } = request.params;

        const operationInfo = await deleteCourse(courseId, request.userId);

        return response.json({
            operationInfo
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router;