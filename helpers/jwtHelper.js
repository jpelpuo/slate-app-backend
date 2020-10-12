const jwt = require('jsonwebtoken');
const createError = require('http-errors');

module.exports = {
    createAccessToken: (userId, email) => {
        return new Promise((resolve, reject) => {
            const payload = {
                userId,
                email
            };

            const secret = process.env.ACCESS_TOKEN_SECRET;

            const options = {
                expiresIn: '1y',
                audience: userId
            }

            jwt.sign(payload, secret, options, (error, token) => {
                if (error) {
                    return reject(createError.InternalServerError());
                }
                resolve(token);
            })

        })
    },
    verifyAccessToken: (accessToken) => {
        return new Promise((resolve, reject) => {
            jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, payload) => {
                if(error){
                    const errorMessage = error.message === 'JsonWebTokenError' ? 'Unauthorized' : error.message;
                    reject(createError.InternalServerError(errorMessage));
                }

                resolve(payload);
            })
        })
    },
    createRefreshToken: (userId, email) => {
        return new Promise((resolve, reject) => {
            const payload = {
                userId,
                email
            };

            const secret = process.env.REFRESH_TOKEN_SECRET;

            const options = {
                expiresIn: '1y',
                audience: userId
            }

            jwt.sign(payload, secret, options, (error, token) => {
                if (error) {
                    return reject(createError.InternalServerError());
                }
                resolve(token);
            })

        })
    },
    verifyRefreshToken: (refreshToken) => {
        return new Promise((resolve, reject) => {
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, payload) => {
                if(error){
                    const errorMessage = error.message === 'JsonWebTokenError' ? 'Unauthorized' : error.message;
                    reject(createError.InternalServerError(errorMessage));
                }

                resolve(payload)
            })
        })
    }
}