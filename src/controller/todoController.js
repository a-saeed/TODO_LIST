import todoModel from "../model/todoModel";

//type in the functions to be exported to routes

const defaultRoute = (req, res) => {
    res.render('index', {});
}

const addNew = (req, res) => {
    const newTodo = new todoModel(req.body);
    newTodo.save((err, newTodo) => {
        if (err)
            res.send(err);
        res.redirect("/api/v1/");
    });
}

module.exports = {
    //function name
    defaultRoute, addNew
};