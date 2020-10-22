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
    },
    whichExam: {
        type: Schema.Types.ObjectId,
        ref: 'Exam'
    }
},
    {
        timestamps: true
    })

module.exports = model('Question', questionSchema);