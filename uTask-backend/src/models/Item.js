const mongoose = require("mongoose");

const ItemShema = new mongoose.Schema({
    content: String,
});

module.exports = mongoose.model("Item", ItemShema);
