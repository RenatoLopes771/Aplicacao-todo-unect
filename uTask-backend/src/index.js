const express = require("express");
const moongose = require("mongoose");
const cors = require('cors');
const routes = require("./routes");

const app = express();

moongose.connect(
    //"mongodb+srv://admin:admin1@cluster0.n8sc6.mongodb.net/unect?retryWrites=true&w=majority",
    "mongodb+srv://omnistack:xMrfShXMhQupvR0o@cluster0.m2fxy.mongodb.net/Cluster0?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    // (err) => {
    //     if (!err) console.log("Successfully connected to mongo...");
    // }
);

app.use(cors()) // { origin: 'https://localhost:3000' }
app.use(express.json());
app.use(routes);

app.listen(4040);
