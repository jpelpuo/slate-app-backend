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
    ],
    registeredUsers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

module.exports = model('Course', courseSchema)