const express = require('express');
const { adminLogin } = require('../../services');
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');

const router = express.Router();

const SUCCESS = 'success';
const FAILURE = 'failure';

// @router POST api/admin/login
// @description Login admin
router.post('/auth', [
    body('email', 'Invalid email!').isEmail()
], async (request, response, next) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            const [error] = errors.array();
            throw createError.BadRequest(error.msg);
        }

        const adminAuth = await adminLogin(request.body);

        return response.json({
            adminAuth
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router;