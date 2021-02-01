import { model, Schema, Document } from "mongoose";
import bcrypt from 'bcrypt';
import { userInterface } from "../interfaces/userInterface";
import jwt from 'jsonwebtoken';

interface userModelInterface extends userInterface, Document{
    compararSenha(password:string) : Promise<boolean>;
    gerarToken(): string;
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

userSchema.methods.gerarToken = function (): string {
    const decodToken = {
        _id:String(this.id),
        name:this.name
    }
    return jwt.sign(decodToken, 'SECRET', {
        expiresIn: '1d'
    })
}

export default model<userModelInterface>('User', userSchema);