import React from 'react'
import { useParams } from 'react-router';
import io from "socket.io-client"

let socket;
export const ChatroomPage = () => {
   const {id}=useParams()
   console.log(id)
    socket= io.connect("http://localhost:4000",{
        query:{
            token:localStorage.getItem('CC_token')
        }
    })
    return (
        <div>
          Hello  
        </div>
    )
}

