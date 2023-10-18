const todo = require("../models/todo");

const getTodos = async (req, res, next) => {
    try {
        const todos = await todo.find().lean();
        res.json({
            error: false,
            message: "Todos fetch success",
            data: todos,
        });
    } catch (err) {
        next(err);
    }
};

const addTodos = async (req, res, next) => {
    const { task, description, priority, status } = req.body;
    try {
        await todo.insertMany([
            {
                task,
                description,
                priority,
                status
            },
        ]);
        res.json({
            error: false,
            message: "Todos Added Successfully",
            data: null,
        });
    } catch (err) {
        next(err);
    }
};

const updateTodo = async (req, res, next) => {
    const { id, task, description, priority, status } = req.body
    console.log(id, task, description, priority, status);
    try {
        await todo.updateOne(
            { _id: id },
            {
                $set: {
                    task: task,
                    description: description,
                    priority: priority,
                    status: status
                }
            }, { upsert: true });
        res.json({
            error: false,
            message: "Todo Updated Successfully",
            data: null,
        });
    } catch (err) {
        next(err);
    }
}

const deleteTodo = async (req, res, next) => {
    const { id } = req.body
    const objToDel = { "_id": id }
    try {
        await todo.deleteOne(objToDel)
        res.json({
            error: false,
            message: "Todo Deleted Successfully",
            data: null,
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getTodos,
    addTodos,
    updateTodo,
    deleteTodo
};
