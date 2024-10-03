const { Schema, model, models } = require("mongoose");

const userNextSchema = new Schema({
    email: String,
    password: String,
}, { timestamps: true });

const UserNext = models.UserNext || model("UserNext", userNextSchema);

module.exports = UserNext;
