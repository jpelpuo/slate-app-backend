const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
    courseName: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tests: [
        {
            type: String
        }
    ]
})

module.exports = model('Course', courseSchema)