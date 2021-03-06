const express = require('express');
const { getExams } = require('../../services/')
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
const { checkAuthorization } = require('../../helpers/authHelper');

const router = express.Router();

router.post('/add', async (request, response, next) => {
    try {
        checkAuthorization(request)

        const newExam = await addExam(request.body, request.userId)

        return response.json({
            newExam
        })
    } catch (error) {
        next(error)
    }
})

router.get('/', async (request, response, next) => {
    try {
        checkAuthorization(request)

        const exams = await getExams();

        return response.json({
            exams
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router;