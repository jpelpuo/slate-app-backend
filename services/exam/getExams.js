const Exam = require('../../dBmodels/exam')
const verifyAdmin = require('../admin/verifyAdmin')
const createError = require('http-errors')

module.exports = getExams = async () => {
    try {
        const exams = await Exam.find().populate('questions').exec()

        return exams

    } catch (error) {
        throw error
    }
}