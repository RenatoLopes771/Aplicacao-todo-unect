const mongoose = require("mongoose");

const ItemShema = new mongoose.Schema({
    content: String,
    done: Boolean,
});

module.exports = mongoose.model("Item", ItemShema);
