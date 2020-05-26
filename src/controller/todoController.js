import todoModel from "../model/todoModel";

//type in the functions to be exported to routes

const defaultRoute = (req, res) => {
    todoModel.find({}).then((results) => { //results is all records in the collection. in other words, all todos.

        const unfinishedtodos = results.filter((todo) => { //filter() takes a fn that in turn takes an item from the collection we're filtering on
            return !todo.done;
        })

        const finishedTodos = results.filter((todo) => {
            return todo.done;
        })
        res.render('index', { todos: unfinishedtodos, doneTodos: finishedTodos });
    })

}

const addNew = (req, res) => {
    const newTodo = new todoModel(req.body);
    newTodo.save(() => {
        res.redirect("/api/v1/");
    });
}

const markDone = (req, res) => {
    const todoId = req.params.id;
    todoModel.findById(todoId)
        .exec() // execute the query, which gives a promise
        .then((result) => {
            //toggle between true and false when clicked
            result.done = !result.done;
            return result.save();  //returns a model
        })  //then after the save is done, either redirect or send an err
        .then(() => {
            res.redirect("/api/v1/");
        }).catch((err) => {
            res.send(err)
        });
}

const deleteTodo = (req, res) => {
    const todoId = req.params.id;
    todoModel.deleteOne({ _id: todoId })
        .exec()
        .then(() => {
            res.redirect("/api/v1/");
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports = {
    //function name
    defaultRoute, addNew, markDone, deleteTodo
};