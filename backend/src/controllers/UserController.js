const UserModel = require ('../models/UserModel');

module.exports = {
    async store (req, res) {
        const {username, password} = req.body;
        const user = await UserModel.create({
            username,
            password
        });
        return res.json(user);
    },

    async index (req, res) {
        const user = await UserModel.find();
        return res.json(user);
    }
}