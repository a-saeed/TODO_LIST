import express from "express";
import {
    defaultRoute, addNew, markDone
} from "../controller/todoController";

const router = express.Router();

router.route("/")
    .get(defaultRoute);

router.route("/newItem")
    .post(addNew);

router.route("/:id/completed")
    .post(markDone);
module.exports = router;