import express from "express";
/*import {
    functions you created in controller
} from "../controller/todoController";*/

const router = express.Router();

/*
router.route("/workspace/user/:id")
    .get(function from controller);*/

router.route("/")
    .get((req, res) => {
        res.json({ "msg": "hello" });
    })

module.exports = router;