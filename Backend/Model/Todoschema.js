import mongoose from "mongoose";
const TodoSchema = mongoose.Schema({
    Day:{
        type: String,
        required: true,
    },
    Work:{
        type: String,
        required: true,
    }

},
{
    timestamps : true,
})
export const Todo = mongoose.model("Todo",TodoSchema);