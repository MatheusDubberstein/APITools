const mongoose = require("mongoose");

const Tool = mongoose.model("Tool");

module.exports = {
    async listAll(req,res){
        const tools = await Tool.find();

        return res.json(tools);
    },
    async register(req, res) {
        const tool = await Tool.create(req.body);

        return res.json(tool);
    },
    async listTag(req, res){
        const { tag } = req.query;
        const tool = await Tool.find({tags: tag});

        return res.json(tool);
    },
    async delete(req,res){
        await Tool.findByIdAndRemove(req.params.id);

        return res.send();
    }
    
}