import { useEffect } from 'react';
import { useState } from 'react'
import {io} from 'socket.io-client';

function App() {
 const socket=io('http://localhost:3000');

 useEffect(()=>{
   socket.on('connect',()=>{
 console.log('connected',socket.id)
   })
   socket.on('bharat',(m)=>{
    console.log(m);
   })

   return ()=>{
    socket.disconnect();
   }
 },[])

  return (
    <>
       <h1>hello world</h1>
    </>
  )
}

export default App
