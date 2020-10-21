const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: [
        {
            type: String,
            required: true
        }
    ],
    correctAnswer: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

module.exports = model('Question', questionSchema);