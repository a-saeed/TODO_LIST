import todoModel from "../model/todoModel";

//type in the functions to be exported to routes

const defaultRoute = (req, res) => {
    res.render('index', {});
}

const addNew = (req, res) => {
    res.json(req.body);
}

module.exports = {
    //function name
    defaultRoute, addNew
};