const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require('../config/auth');

const User = mongoose.model('User');

module.exports = {

    async auth (req, res) {
        const { username, password } = req.body;
        
        const user = await User.findOne({ username }).select('+password');
        
        if(!user)
            return res.status(400).send({error: 'Usuário não encontrado'});
        
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: "Senha Invalida" });

        user.password = undefined;
        
        const token = jwt.sign({ id: user.id}, authConfig.secret, {
            expiresIn: 3600,
        });

        return res.json({ user, token });
    }

}