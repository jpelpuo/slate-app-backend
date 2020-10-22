const { Schema, model } = require('mongoose');

const examSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Question'
        }
    ],
    numberOfQuestions: {
        type: Number
    }
},
    {
        timestamps: true
    })

module.exports = model('Exam', examSchema)