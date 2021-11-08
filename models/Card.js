const mongoose = require('mongoose')
const TaskSchema = require("./Task")


const Schema = mongoose.Schema;

const CardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tasks: [{
        title: String,
        date: {
            type: Date,
            default: new Date(),
        }
    }],

});

module.exports = mongoose.model("CardSchema", CardSchema);

