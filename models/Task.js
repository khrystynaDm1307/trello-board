
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

 const TaskSchema = new Schema({
    cardId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: new Date(),
    }
});

module.exports=mongoose.model("TaskSchema", TaskSchema)

