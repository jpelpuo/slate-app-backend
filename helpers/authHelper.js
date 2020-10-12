const createError = require('http-errors');

module.exports = authHelper = {
    checkAuthorization: request => {
        if (request.jwtExpired) {
            throw new createError.InternalServerError(request.error)
        }
        
        if (!request.isAuthenticated) {
            throw new createError.Unauthorized();
        }
    }
}