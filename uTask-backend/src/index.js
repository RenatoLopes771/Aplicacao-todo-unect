const express = require("express");
const moongose = require("mongoose");
const routes = require("./routes");

const app = express();

moongose.connect(
    "mongodb+srv://admin:admin1@cluster0.n8sc6.mongodb.net/unect?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    // (err) => {
    //     if (!err) console.log("Successfully connected to mongo...");
    // }
);

app.use(express.json());
app.use(routes);

app.listen(4040);
