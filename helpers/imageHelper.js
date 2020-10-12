const createError = require('http-errors');

module.exports = {
    decodeBase64Image: dataString => {
        return new Promise((resolve, reject) => {
            let matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
                response = {};

            if (matches.length !== 3) {
                return reject(createError.BadRequest('Invalid image buffer'));
            }

            response.type = matches[1];
            response.data = new Buffer.from(matches[2], 'base64');

            resolve(response);
        })
    }
}
