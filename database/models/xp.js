const mongoose = require('mongoose');

const usersXP = new mongoose.Schema({
    serverID: String,
    userID: String,
    exp: { type: Number, default: 0 },
    level: { type: Number, default: 1 }
});


module.exports = mongoose.model("xptables", usersXP);