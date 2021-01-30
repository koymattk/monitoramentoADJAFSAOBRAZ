import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
})

export default model('User', userSchema);