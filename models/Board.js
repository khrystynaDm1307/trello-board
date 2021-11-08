import mongoose from "mongoose";
import { CardSchema } from "./Card";

const Schema = mongoose.Schema;

export const BoardStarSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cards:[CardSchema]
});

export default mongoose.model("BoardStar", BoardStarSchema);
