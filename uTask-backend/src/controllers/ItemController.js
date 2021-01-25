const { update } = require("../models/Item");
const Item = require("../models/Item");

module.exports = {
    async index(req, res) {
        const items = await Item.find();
        return res.json(items);
    },

    async store(req, res) {
        const { content, done } = req.body;
        const item = await Item.create({
            content,
            done,
        });
        return res.json(item);
    },

    async update(req, res) {
        const { id, newContent, newDone } = req.body;
        const item = await Item.findById(id);
        if (item) {
            item.content = item.content; // newContent, funcionalidade a fazer
            item.done = newDone;

            await item.save();
            return res.json({ success: true });
        } else {
            return res.json({ success: false });
        }
    },

    async destroy(req, res) {
        const { id } = req.body;
        await Item.findByIdAndRemove(id, { useFindAndModify: true }, (item) => {
            return res.json({ success: !item });
        });
    },
};
