import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { makeToast } from '../../Toaster'
import proxy from '../../proxy.json'
import { Link } from 'react-router-dom'

export const DashboardPage = () => {
    const [chatroom,setChatroom]=useState([])
    const getChatroom = () =>{
        axios.get(proxy.endpoint+"chat/room",{
            headers:{
            Authorization:"Bearer "+ localStorage.getItem("CC_token")
            }
        }).then(res=>{
            console.log(res.data)
            setChatroom(res.data)
        }).catch(err=>{
            makeToast("error",err)
        })
    }
    useEffect(() =>{
        getChatroom()
    },[])
    return (
        <div className='d-flex align-items-center justify-content-center' style={{height:"800px"}}>
        <form style={{maxWidth:"550px",margin:"0 auto",}}>
 <h4> Chat Room</h4>
<div class="row mb-4">
<div class="col">
  <div class="form-outline">
    <input type="text" id="form3Example1" class="form-control" />
    <label class="form-label" for="form3Example1">Chat Room name</label>
  </div>
</div>

</div>





<button type="submit" class="btn btn-primary btn-block mb-4">Create Chatroom</button>
<div className="chatrooms">
    
    {chatroom.map(chatroom =>(
        <div className="chatroom" key={chatroom._id}>
        <div>{chatroom?.name}</div>
        <Link to={"/chatroom/"+chatroom._id}><div className="join">Join</div></Link>
        
    </div>
    ))}
   
</div>
</form>

    </div>
    )
}
