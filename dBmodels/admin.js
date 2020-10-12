const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = model('Admin', adminSchema);