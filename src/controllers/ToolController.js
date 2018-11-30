const mongoose = require("mongoose");

const Tool = mongoose.model("Tool");

module.exports = {
    async list(req,res){
        let { tag } = req.query;
        if(tag === undefined){
            const tools = await Tool.find();
            return res.json(tools);
        } else {
            const tools = await Tool.find( { tags: tag });
            return res.json(tools);
        }
    },
    async register(req, res) {
            const tool = await Tool.create(req.body);

            return res.json(tool);

    },
    async delete(req,res){
        await Tool.findByIdAndRemove(req.params.id);

        return res.send();
    }
    
}