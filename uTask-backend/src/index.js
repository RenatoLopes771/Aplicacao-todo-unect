const express = require("express");
const moongose = require("mongoose");
const cors = require('cors');
const routes = require("./routes");

const app = express();

moongose.connect(
    "mongodb+srv://usuario:senha@cluster0.m2fxy.mongodb.net/Cluster0?retryWrites=true&w=majority", // Usuário e senha
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
