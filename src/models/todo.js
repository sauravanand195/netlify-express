const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: {
        required: true,
        type: String,
        minlength: 3,
        maxlength: 100,
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 200,
    },
    status: {
        required: true,
        type: String,
        minlength: 3,
        maxlength: 100,
    },
    priority: {
        required: true,
        type: String,
        minlength: 3,
        maxlength: 100,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("todo_app", todoSchema, "todo_app");
