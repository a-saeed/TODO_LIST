import express from "express";
import mongoose from "mongoose";
import config from "config";
import todoRoutes from "./api/todoRoutes";
import mustacheExpress from "mustache-express";

// load configurations
const port = config.get("app.port");
const db = config.get("database.url");
const prefix = config.get("api.prefix");
const app = express();
const mustacheExpressInstance = mustacheExpress();

//template engine setup
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
app.set("view engine", "mustache");
app.set('views', './views');

// Express Parser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Calling the routes
app.use(prefix, todoRoutes);

// Running server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export port
module.exports = app;