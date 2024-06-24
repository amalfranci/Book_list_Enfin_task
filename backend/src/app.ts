import express,{Request,Response,NextFunction,Application,ErrorRequestHandler}  from 'express'
import { Server } from 'http'
import createHttpError from 'http-errors' 
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose, { Mongoose } from 'mongoose'
dotenv.config()
import bookRoutes from './routes/bookRoutes'


const app :Application = express()


const corsOptions = {
    origin: true,
    credentials: true,
};



// this is middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));


// setting database with my mongoURL

mongoose.connect(process.env.MONGO_URI as string, {

  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Error connecting to MongoDB', err);
  });

//    Routes setting -api

 app.use('/api',bookRoutes)


const PORT:Number = Number(process.env.PORT) || 4000

app.get('/',(req:Request,res:Response,next:NextFunction)=>{

    res.send("hello from ts app")
})

app.use((req: Request, res : Response, next : NextFunction)=>{
    next(new createHttpError.NotFound())

})

const errorHandles : ErrorRequestHandler = (err,req,res,next)=>{
    res.status(err.status  || 500 )
    res.send({
        status :err.status || 500,
        message :err.message
    })
}

app.use(errorHandles)




const server:Server = app.listen(PORT,()=>{

    console.log(`Server connect on port on ${PORT}`)
})