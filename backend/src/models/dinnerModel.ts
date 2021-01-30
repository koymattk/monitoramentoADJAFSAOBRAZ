import { model, Schema } from "mongoose";

const dinnerSchema = new Schema({
    value: {
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    jovem:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
})

export default model('Dinner', dinnerSchema);