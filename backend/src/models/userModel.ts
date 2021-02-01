import { model, Schema, Document } from "mongoose";
import bcrypt from 'bcrypt';
import { userInterface } from "../interfaces/userInterface";


interface userModelInterface extends userInterface, Document{
    compararSenha(password:string) : Promise<boolean>;
}

const userSchema = new Schema<userModelInterface>({
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

userSchema.pre<userModelInterface>('save', async function () {
    this.password = await  bcrypt.hash(this.password, 8);
});

userSchema.methods.compararSenha = async function (password:string): Promise<boolean> {
    return bcrypt.compare(password, this.password || '');
}

export default model<userModelInterface>('User', userSchema);