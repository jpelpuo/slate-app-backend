const { Schema, model } = require('mongoose');

const examSchema = new Schema({
    examName: {
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
    ]
},
    {
        timestamps: true
    })

module.exports = model('Exam', examSchema)