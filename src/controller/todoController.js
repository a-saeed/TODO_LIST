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

module.exports = {
    //function name
    defaultRoute, addNew
};