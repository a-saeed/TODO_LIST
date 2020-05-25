import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    description: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false
    },
});
const todoModel = mongoose.model('todo', todoSchema);
module.exports = todoModel; 