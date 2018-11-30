const mongoose = require("mongoose");

const User = mongoose.model('User');

module.exports = {
    async list(req, res) {
        const users = await User.find();

        return res.json(users);
    },
    async register (req, res) {
        const { username } = req.body;

        if( await User.findOne({ username }))
            return res.status(400).send({ error: 'Usuario já existe'});

            const user = await User.create(req.body);

            user.password = undefined;

            return res.json(user);
    },
    async delete (req, res) {
        await User.findByIdAndRemove(req.params.id);

        return res.send();
    }
}

