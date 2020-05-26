import todoModel from "../model/todoModel";

//type in the functions to be exported to routes

const defaultRoute = (req, res) => {
    todoModel.find({}, (err, data) => {     //find{} : find all objects
        if (err)
            res.send(err);
        res.render('index', { todos: data });
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