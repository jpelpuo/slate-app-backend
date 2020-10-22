const Exam = require('../../dBmodels/exam')
const Question = require('../../dBmodels/question')
const verifyAdmin = require('../admin/verifyAdmin')
const createError = require('http-errors')

module.exports = addExam = async ({ name, duration, questions }, userId) => {
    try {
        verifyAdmin(userId)

        const newExam = new Exam({ name, duration, questions: [] })

        questions.forEach(question => question.whichExam = newExam._id)

        const examQuestions = await Question.insertMany(questions)

        if (!examQuestions) {
            throw createError.BadRequest("Error adding questions")
        }

        const questionIds = examQuestions.map(question => question._id)

        newExam.questions = [...newExam.questions, ...questionIds]

        await newExam.save();

        return newExam;

    } catch (error) {
        throw error
    }
}