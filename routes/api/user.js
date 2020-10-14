const express = require('express');
const { userLogin, saveImage, getUserInfo } = require('../../services');
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
const { checkAuthorization } = require('../../helpers/authHelper')

const router = express.Router();

const SUCCESS = 'success';
const FAILURE = 'failure';

// @router POST api/users/register
// @description Register a user
router.post('/register', [
    body('email', 'Invalid email!').isEmail()
], async (request, response, next) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            const [error] = errors.array();
            throw createError.BadRequest(error.msg);
        }

        const newUser = await register(request.body);
        return response.json({
            ...newUser._doc,
            password: null
        });
    } catch (error) {
        next(error);
    }
})

// @route POST api/user/auth
// @description Login/Authenticate a user
router.post('/auth', [
    body('email', 'Invalid email!').isEmail()
], async (request, response, next) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            const [error] = errors.array();
            throw createError.BadRequest(error.msg);
        }

        const authData = await userLogin(request.body);
        return response.json({
            authData
        });
    } catch (error) {
        next(error)
    }
})

// @route POST api/user/savepicture
// @description Save user image
router.post('/savepicture', [], async (request, response, next) => {
    try {
        const { imageBase64, userName } = request.body;
        const imageSaved = await saveImage(imageBase64, userName);

        if (!imageSaved) {
            return response.json({
                status: FAILURE
            })
        }
        return response.json({
            status: SUCCESS
        })
    } catch (error) {
        next(error);
    }
})


router.get('/:email', async (request, response, next) => {
    try {
        checkAuthorization(request);

        const { email } = request.params;

        const userInfo = await getUserInfo(email);

        return response.json({
            userInfo
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router;