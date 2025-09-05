import express from 'express';
import cors from 'cors';
import {createServer} from 'http'
import {Server} from 'socket.io'
import dotenv from 'dotenv'
 dotenv.config();

const app=express();

//cors
 app.use(cors({origin:'http://localhost:5173'}))

// make server and io
const server=new createServer(app);
const io=new Server(server,{
    cors:{
        origin:'http://localhost:5173',
        credentials:true
    }
});

app.get('/',(req,res)=>{
    res.send("Hello World!");
})
// chat 
io.on('connection',(socket)=>{
     console.log('user connected',socket.id);
     socket.emit('bharat','hey you are connected');
     socket.on('disconnect',()=>{
        console.log('user dissconnect',socket.id);
     })
     
})
const port =process.env.PORT
server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})

