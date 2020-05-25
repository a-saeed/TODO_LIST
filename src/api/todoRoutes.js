import express from "express";
import {
    defaultRoute, addNew
} from "../controller/todoController";

const router = express.Router();

router.route("/")
    .get(defaultRoute);

router.route("/todos")
    .post(addNew);
module.exports = router;