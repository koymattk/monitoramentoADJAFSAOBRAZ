import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

export class App {
    private express: express.Application;
    private port = 3333;

    constructor() {
        this.express = express();
        this.listen();
        this.middlewares();
        this.database();
    }

    private listen(): void {
        this.express.listen(this.port, () => {
            console.log('server rorando na porta 3333');
        })
    }

    public getApp(): express.Application {
        return this.express; 
    }

    private database(): void {
        mongoose.connect('mongodb://localhost:27017/teste', {
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
    }
    
    private middlewares() : void {
        this.express.use(express.json());
        this.express.use(cors());
    }

}