import { model, Schema, Document } from "mongoose";
import bcrypt from 'bcrypt';
interface userInterface extends Document {
    _id: any | string;
    name?: string;
    password?: string;
    age?: number;
}

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

userSchema.pre<userInterface>('save', async function () {
    this.password = await  bcrypt.hash(this.password, 8);
});

export default model<userInterface>('User', userSchema);